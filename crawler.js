const cheerio = require('cheerio');
const request = require('request');

request("http://www.nettruyen.com/",function(error,response,html) {
    let $ = cheerio.load(html);

    let links = $("a");
    var crawlinks = new Set();
    $(links).each(function(i, link) {
        let data = $(link).attr('href');
        crawlinks.add(data);
    })
    if (crawlinks.has(undefined)) {
        crawlinks.delete(undefined)
    }

    let ArrLinks = [...crawlinks].filter(value => {
        if (value.startsWith('http')) {
            return value;
        }
    });

    // console.log(ArrLinks)
    
    
    
    
    function processPromise(link) {
        return new Promise((resolve, reject) => {
            request(`${link}`, (error, response, html) => {
                let $ = cheerio.load(html);
                const title = $("title").text();
                const name = $("meta[name='description']").attr("content");
                let data = {
                    title: title,
                    name : name
                }
                resolve(data);
            });
        });
    }
      
    async function processAsync(link){
        return await processPromise(link);
    }

    async function processArrLinks(ArrLinks) {
        let tid = ArrLinks.shift();
        let msg = await processAsync(tid);
        console.log(`${msg.title}\n ${msg.name}\n`);
      
        if(ArrLinks.length != 0){
          // await processTransactions(transactions);
          process.nextTick(processArrLinks, ArrLinks);
        };
    }
    async function process2(ArrLinks){
        await Promise.all([
            processArrLinks(ArrLinks),
            processArrLinks(ArrLinks)
        ]);
    }

    async function processN(number, ArrLinks){
        let promises = [];
        for (let i =0; i < number; i++)
          promises.push(processArrLinks(ArrLinks));
      
        await Promise.all(promises);
      }
    

    (async () => {
        // // Async/Await
        // let msg = await processTransactionAsync(ArrLinks);
        // console.log(msg);
        //
        await process2(ArrLinks);

        // await processN(10, ArrLinks);
    })();
    

});