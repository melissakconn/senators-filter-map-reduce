import React from 'react'
import SenData from './senators.json'

export default class main extends React.Component {
    render() {

        let FilterRepublicans = () => {
            console.log("hello Republicans");
            console.log("All Records: ", SenData);

            // console.log(SenData[42])
            // console.log(SenData[42].party)
            // console.log(SenData[42].party  === "Republican" )

            const RepSen = SenData.filter((politician) => {
                return politician.party === "Republican"
            })

            console.log(RepSen)
        }

        let FilterDemocrats = () => {
            const DemSen = SenData.filter((politician) => {
                return politician.party === "Democrat"
            })

            console.log(DemSen)
        }

        let FilterUtahSenators = () => {
            const UtahSen = SenData.filter((politician) => {
                return politician.state === "UT"
            })

            console.log(UtahSen)
            }

        let FilterUtahSenior = () => {
            const Senior = SenData.filter((politician) => {
                return politician.description === "Senior Senator from Utah"
            })

            console.log(Senior)
        }

        return (
            <div>

                <h1>Senators Homework</h1>
                <hr/>

                <button onClick={FilterRepublicans} > Republians </button>
                <br/><br/>

                <button onClick={FilterDemocrats} > Democrats </button>
                <br/><br/>

                <button onClick={FilterUtahSenators} > Utah Senators </button>
                <br/><br/>

                <button onClick={FilterUtahSenior} > Utah Senior Senator </button>
                <br/><br/>



            </div>
        )
    }
}