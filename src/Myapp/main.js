import React from 'react'
import SenData from './senators.json'

export default class main extends React.Component {
    constructor(props){
        super(props)
        this.state=({
            filteredList: SenData
        })
    }
    render() {

        let FilterRepublicans = () => {
            console.log("hello Republicans");
            console.log("All Records: ", SenData);

            // console.log(SenData[42])
            // console.log(SenData[42].party)git
            // console.log(SenData[42].party  === "Republican" )

            const RepSen = SenData.filter((politician) => {
                return politician.party === "Republican"
            })

            console.log(RepSen)
            this.setState({filteredList: RepSen })
        }

        let FilterDemocrats = () => {
            const DemSen = SenData.filter((politician) => {
                return politician.party === "Democrat"
            })

            console.log(DemSen)
            this.setState({filteredList: DemSen })
        }

        let FilterUtahSenators = () => {
            const UtahSen = SenData.filter((politician) => {return politician.state === "UT"}
            )
            UtahSen.map( senator => {})
            console.log(UtahSen)
            this.setState({filteredList: UtahSen })
            }

        let FilterUtahSenior = () => {
            const Senior = SenData.filter((politician) => {
                return politician.description === "Senior Senator from Utah"
            })

            console.log(Senior[0].person.firstname)
            this.setState({filteredList: Senior })
            // this.setState({filteredList: (Senior[0].person.firstname + '' + Senior[0].person.lastname)})
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
                <div>
                    {this.state.filteredList.map((senator) => <h2>{senator.person.name}</h2>)}
                    {/*{SenData.map((senator) => <h2>{senator.person.name}</h2>)}*/}
                </div>
            </div>
        )
    }
}