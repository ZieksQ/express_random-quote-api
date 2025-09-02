// Import quotes.json
import data from '../utils/quotes.json' with {type: 'json'}
// Import random util
import { random } from '../utils/random.js'


// ================================================//
//                    ==GET==                      //
// ================================================//

// get all quotes
export const getAllQuotes = (req,res) => {
    res.status(200).json(data)
}

// get specific quotes
export const getSpecificQuote = (req,res) => {
    const {id} = req.params
    const newQuote = data.find(d => d.id === Number(id)) // find the id of the 
    // console.log(newQuote)

    if(!newQuote){
        return res.status(404).json({status: false, message: "no quote found"})
    }
    res.status(200).json(newQuote)
}

// get random quotes
export const getRandomQuote = (req,res) => {
    const randomIndex = random(1, data.length)
    const Quote = data[randomIndex] 

    if (!Quote) {
        return res.status(404).json({ status: false, message: "no quote found" })
    }

    res.status(200).json(Quote)
}