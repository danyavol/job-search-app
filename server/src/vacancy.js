const axios = require('axios');
const cheerio = require('cheerio');

  
const express = require('express');
const job = express.Router();
module.exports = job;

// pathExample = '/job?text=Frontend&region=Minsk&take=20&page=0'
job.get('/job/', async (req, res) => {
    const query = req.query;
    if (!query.text) return res.json(new Error('Text query is required'));

    const reqLink = generateReqLink(query);
    const response = await axios.get(reqLink, {headers: {'Accept': 'text/html'}}).catch(err => err);

    if (response instanceof Error) {
        console.log(response.message);
        return res.json(response);
    } else {
        const output = parseJobs(response.data);
        output.query = query;
        return res.json( output );
    }
});

function generateReqLink(query) {
    if (!query.region) query.region = 'Minsk';
    if (!query.take) query.take = 10; else query.take = parseInt(query.take);
    if (!query.page) query.page = 0; else query.page = parseInt(query.page);

    const regions = {
        'minsk': 1002,
        'gomel': 1003,
        'mogilev': 1004,
        'vitebsk': 1005,
        'grodno': 1006,
        'brest': 1007
    };

    return `https://rabota.by/search/vacancy?st=searchVacancy&text=${encodeURIComponent(query.text)}&area=${regions[query.region.toLowerCase()] || 1002}&experience=doesNotMatter&order_by=relevance&items_on_page=${query.take}&page=${query.page}`;
}

function parseJobs(html) {
    const $ = cheerio.load(html);

    const total = parseInt( $('[data-qa="bloko-header-1"]').text().replace(/\s/g, '') );
    const totalPages = parseInt( $('[data-qa="pager-page"]').last().text() );

    const jobs = [];
    $('.vacancy-serp-item').each((i, elem) => {
        const vacancy = {};

        vacancy.title = $(elem).find('[data-qa="vacancy-serp__vacancy-title"]').text();
        vacancy.url = $(elem).find('[data-qa="vacancy-serp__vacancy-title"]').attr('href');
        vacancy.salary = $(elem).find('[data-qa="vacancy-serp__vacancy-compensation"]').text();
        vacancy.company = $(elem).find('[data-qa="vacancy-serp__vacancy-employer"]').text();
        vacancy.address = $(elem).find('[data-qa="vacancy-serp__vacancy-address"]').text();
        vacancy.responsibility = $(elem).find('[data-qa="vacancy-serp__vacancy_snippet_responsibility"]').text();
        vacancy.requirement = $(elem).find('[data-qa="vacancy-serp__vacancy_snippet_requirement"]').text();
        vacancy.date = $(elem).find('[data-qa="vacancy-serp__vacancy-date"] .vacancy-serp-item__publication-date_long').text();
        
        jobs.push(vacancy);
    });

    return { total, totalPages, jobs };
}