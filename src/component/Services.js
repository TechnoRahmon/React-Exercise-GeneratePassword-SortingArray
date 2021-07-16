import React, { Component } from 'react'

import Sort from './Sorting/Sort'
import SortResult from './Sorting/SortResult'
import GeneratePassword from './Generating/GeneratePassword'
import GenerateResult from './Generating/GenerateResult'


export default class Services extends Component {


    constructor(){
        super();

        this.state= {toggleSection:'generate' ,  inputValue:'', SortedArray:[] ,NewPassword:'' }
    }

    _handelInputChange=(e)=>{
          
             let inputChar = e.nativeEvent.data;
            console.log(inputChar);

             if ( ( inputChar && inputChar.match(/[\d,]/g) ) || !inputChar ){

                 this.setState({inputValue:e.target.value})
             }
           
    }



    _handelSortClick=()=>{
        //console.log(this.state.inputValue.split(','));

        let SortArray = this.state.inputValue[0]===',' ? this.state.inputValue.slice(1):this.state.inputValue;
        console.log(SortArray.split(','));
        SortArray = SortArray.split(',').map(item=>Number(item)).sort((a,b)=>a-b)
        this.setState({ SortedArray:SortArray, inputValue:''})
        
    }



    _handelGenerateClick=()=>{


        let Numbers = Array(3).fill('0123456789').map(x=>x[Math.floor(Math.random()* x.length)]).join('')
        let LowerAlpha = Array(2).fill('abcdefghijklmnopqrstuvwxyz').map(x=>x[Math.floor(Math.random()* x.length)]).join('')
        let UpperAlpha= Array(2).fill('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map(x=>x[Math.floor(Math.random()* x.length)]).join('')
        let Symbols = Array(1).fill('!@#$%^&').map(x=>x[Math.floor(Math.random()* x.length)]).join('')

        let newPassword = UpperAlpha+Numbers+LowerAlpha+Symbols;

        this.setState({NewPassword:newPassword})

    }


    render() {
        return (
            <div className="row mt-3">
                   
                    <div className="col-6 bg-light p-3 mx-3 text-start">
                            <h1 className="display-3 mb-4">Select A Service :  </h1>


                        <div> 
                            <input type="radio" className="" name="service" id="generate" value="generate" 
                                checked={this.state.toggleSection === 'generate'}
                               onChange={()=>{this.setState({ toggleSection:'generate'})}} />
                            <label htmlFor="generate" className="ml-2">Generate Password</label>
                            
                        
                        </div>

                        <div> 
                            <input type="radio" className="" name="service" id="sort" value="sort" 
                            checked={this.state.toggleSection === 'sort'}
                               onChange={()=>{ this.setState({ toggleSection:'sort'}) }} />

                            <label htmlFor="sort" className="ml-2">Sort A Numberic Array</label>
                        
                        </div>

                        {this.state.toggleSection==='generate'? 
                        (
                            <GeneratePassword onClick={this._handelGenerateClick}/> 
                        )
                        :(
                                <Sort 
                                onChange={this._handelInputChange}
                                 inputValue={this.state.inputValue} 
                                 onClick={this._handelSortClick}/>
                        )}

                       
                      
                        
                    </div>


                    <div className="col-4 bg-light p-3">

                    {this.state.toggleSection==='generate'? 
                       <GenerateResult NewPassword={this.state.NewPassword} / >
                        :
                         <SortResult SortedArray={this.state.SortedArray}/>
                    }

                    </div>


            </div>
        )
    }
}
