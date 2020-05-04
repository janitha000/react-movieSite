import * as Constants from '../Util/Constants'

const CovidService = {
    getSummary: () => {
        return new Promise((resolve, reject) => {
            let Url = `${Constants.COVID_URL}summary`
            fetch(Url)
                .then(res => res.json())
                .then(result => {
                    if(result){
                        resolve(result);
                    }
                }).catch(err => {
                    console.log(err);
                    return ({ "Error": err })
                })
        })
    },

    getByCountry: (country) => {
        return new Promise((resolve, reject) => {
            let Url = `${Constants.COVID_URL}total/dayone/country/singapore/status/confirmed`
            fetch(Url)
                .then(res => res.json())
                .then(result => {
                    if(result){
                        resolve(result);
                    }
                }).catch(err => {
                    console.log(err);
                    return ({ "Error": err })
                })
        })
    }

}

export default CovidService;