import puppeteer from 'puppeteer';
import { setTimeout } from 'timers/promises';

(async () => {

	try {
		let browser = await puppeteer.launch();
		const page = await browser.newPage();
		console.log('Opening page...');
		page.goto('https://cssauthor.com/30-best-content-heavy-websites-for-your-inspiration/', { timeout: 5000 });

		console.log('Waiting for page to partly be loaded (but not fully)...');
		await setTimeout(1000);
		console.log('Closing browser...');
		await browser.close();
	} catch (error) {
		console.log('error', error);
	}

	console.log('Waiting...');
	setInterval(() => {
		console.log('Waiting...');
	}, 2000);
	await setTimeout(30000000);
})();
