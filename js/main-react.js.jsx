  // Stripe.setPublishableKey('pk_test_dio6sLmQfHbtstVKUkyDoCwN');
  //
  // var Shirt = React.createClass({
  //   getInitialState: function(){
  //     return{pixelsFromTop:145,inchesFromTop:2.5}
  //   },
  //   handleButtonClick: function(e){
  //     e.preventDefault();
  //     this.props.onButtonCLick();
  //   },
  //   handleUpClick: function(e){
  //     e.preventDefault();
  //     if(this.state.inchesFromTop > 0.6){
  //       var newInches = (parseFloat(this.state.inchesFromTop)-0.5).toFixed(1)
  //       this.setState({pixelsFromTop:this.state.pixelsFromTop-10,inchesFromTop:newInches})
  //       this.props.onInchesChange(newInches)
  //     }
  //   },
  //   handleDownClick: function(e){
  //     e.preventDefault();
  //     if(this.state.inchesFromTop < 4.6){
  //       var newInches = (parseFloat(this.state.inchesFromTop)+0.5).toFixed(1)
  //       this.setState({pixelsFromTop:this.state.pixelsFromTop+10,inchesFromTop:newInches})
  //       this.props.onInchesChange(newInches)
  //     }
  //   },
  //   handleColorClick: function(e){
  //     e.preventDefault()
  //     this.props.onColorChange(e.target.value)
  //   },
  //   render: function(){
  //     var className = "shirt color-"+this.props.color
  //     var buttonClass
  //     if(this.props.valid == false){
  //       buttonClass = "invalid"
  //     }
  //
  //     if (this.props.shirtState == "button"){
  //       return(
  //         <div className={className}>
  //             <button className={"upload-butt "+buttonClass} onClick={this.handleButtonClick}>+</button>
  //           <div className="buttons">
  //             <button className="color color-white" onClick={this.handleColorClick} value="white"></button>
  //             <button className="color color-black" onClick={this.handleColorClick} value="black"></button>
  //             <button className="color color-blue" onClick={this.handleColorClick} value="blue"></button>
  //             <button className="color color-green" onClick={this.handleColorClick} value="green"></button>
  //             <button className="color color-orange" onClick={this.handleColorClick} value="orange"></button>
  //             <button className="color color-pink" onClick={this.handleColorClick} value="pink"></button>
  //             <button className="color color-purple" onClick={this.handleColorClick} value="purple"></button>
  //             <button className="color color-red" onClick={this.handleColorClick} value="red"></button>
  //             <button className="color color-yellow" onClick={this.handleColorClick} value="yellow"></button>
  //           </div>
  //         </div>
  //       )
  //     }
  //     else{
  //       return(
  //         <div className={className}>
  //           <div className="canvas" style={{paddingTop:this.state.pixelsFromTop}}>
  //             <img src={this.props.image} />
  //           </div>
  //           <div className="positioner">
  //             <button onClick={this.handleUpClick}><i className="fa fa-sort-asc"></i></button>
  //             <div className="inches"> {this.state.inchesFromTop+'"'}</div>
  //             <button onClick={this.handleDownClick}><i className="fa fa-sort-desc"></i></button>
  //           </div>
  //           <div className="buttons after-upload">
  //             <button className="color color-white" onClick={this.handleColorClick} value="white"></button>
  //             <button className="color color-black" onClick={this.handleColorClick} value="black"></button>
  //             <button className="color color-blue" onClick={this.handleColorClick} value="blue"></button>
  //             <button className="color color-green" onClick={this.handleColorClick} value="green"></button>
  //             <button className="color color-orange" onClick={this.handleColorClick} value="orange"></button>
  //             <button className="color color-pink" onClick={this.handleColorClick} value="pink"></button>
  //             <button className="color color-purple" onClick={this.handleColorClick} value="purple"></button>
  //             <button className="color color-red" onClick={this.handleColorClick} value="red"></button>
  //             <button className="color color-yellow" onClick={this.handleColorClick} value="yellow"></button>
  //           </div>
  //         </div>
  //       )
  //     }
  //   }
  // })
  //
  // var Form = React.createClass({
  //   getInitialState: function(){
  //     return {shirtState:'button',
  //     image:null,
  //     inches:2.5,
  //     color:'white',
  //     bandName:'',
  //     bandcampUrl:'',
  //     email:'',
  //     fullName:'',
  //     ccNumber:'',
  //     month:'',
  //     year:'',
  //     cvc:'',
  //     stripeToken:null,
  //     numberValid:null,
  //     cvcValid:null,
  //     yearValid:null,
  //     cardType:null}
  //   },
  //   handleButtonClick: function(){
  //     var upload = React.findDOMNode(this.refs.file).click();
  //
  //   },
  //   handleFileChange: function(){
  //     var oFReader = new FileReader();
  //     var form = this;
  //     oFReader.readAsDataURL(React.findDOMNode(this.refs.file).files[0]);
  //     oFReader.onload = function (oFREvent) {
  //       form.setState({shirtState:'uploaded',image:oFREvent.target.result})
  //     };
  //   },
  //   handleInchesChange: function(inches){
  //     this.setState({inches:inches})
  //   },
  //   handleColorChange: function(color){
  //     this.setState({color:color})
  //   },
  //   handleSubmit: function(e){
  //     e.preventDefault();
  //     if(this.state.numberValid
  //       && this.state.cvcValid
  //       && this.state.yearValid
  //       && this.state.bandName != ''
  //       && this.state.bandcampUrl != ''
  //       && this.state.email != ''
  //       && this.state.fullName != ''
  //       && this.state.image != null){
  //       this.props.onSubmit(true);
  //       Stripe.card.createToken({
  //         number: React.findDOMNode(this.refs.cc_number).value.trim(),
  //         cvc: React.findDOMNode(this.refs.cvc).value.trim(),
  //         exp_month: React.findDOMNode(this.refs.month).value.trim(),
  //         exp_year: React.findDOMNode(this.refs.year).value.trim(),
  //       }, this.stripeResponseHandler);
  //     }
  //     else{
  //       if (this.state.numberValid == null){
  //         this.setState({numberValid:false})
  //       }
  //       if (this.state.cvcValid == null){
  //         this.setState({cvcValid:false})
  //       }
  //       if (this.state.yearValid == null){
  //         this.setState({yearValid:false})
  //       }
  //       if( this.state.bandName == ''){
  //         this.setState({bandNameValid:false})
  //       }
  //       if( this.state.bandcampUrl == ''){
  //         this.setState({bandUrlValid:false})
  //       }
  //       if( this.state.email == ''){
  //         this.setState({emailValid:false})
  //       }
  //       if( this.state.fullName == ''){
  //         this.setState({fullNameValid:false})
  //       }
  //       if( this.state.image == null){
  //         this.setState({imageValid:false})
  //       }
  //
  //
  //     }
  //
  //   },
  //   stripeResponseHandler: function(status, response){
  //       // var $form = $('#payment-form');
  //     console.log("stripe response handling")
  //     if (response.error) {
  //       // Show the errors on the form
  //       alert(response.error.message)
  //       this.props.onSubmit(false);
  //
  //       // $form.find('.payment-errors').text(response.error.message);
  //       // $form.find('button').prop('disabled', false);
  //     } else {
  //       var token = response.id;
  //       this.setState({stripeToken:token})
  //       // $form.get(0).submit();
  //       React.findDOMNode(this.refs.form).submit();
  //
  //     }
  //   },
  //   validateCard: function(){
  //
  //     this.setState({numberValid:Stripe.card.validateCardNumber(React.findDOMNode(this.refs.cc_number).value.trim()),
  //                 cardType:Stripe.card.cardType(React.findDOMNode(this.refs.cc_number).value.trim())})
  //   },
  //   validateCVC: function(){
  //     this.setState({cvcValid:Stripe.card.validateCVC(React.findDOMNode(this.refs.cvc).value.trim())})
  //   },
  //   validateYear: function(){
  //     if(React.findDOMNode(this.refs.month).value.trim().length > 1 && React.findDOMNode(this.refs.year).value.trim().length > 1){
  //       this.setState({yearValid:Stripe.card.validateExpiry(React.findDOMNode(this.refs.month).value.trim(),React.findDOMNode(this.refs.year).value.trim())})
  //     }
  //   },
  //   handleTyping: function(e){
  //     var value = e.target.value
  //     if(e.target.id == "name"){
  //       this.setState({bandName:value,bandNameValid:true})
  //     }
  //     else if (e.target.id == "url"){
  //       this.setState({bandcampUrl:value,bandUrlValid:true})
  //     }
  //     else if (e.target.id == "email"){
  //       this.setState({email:value,emailValid:true})
  //     }
  //     else if (e.target.id == "fullName"){
  //       this.setState({fullName:value,fullNameValid:true})
  //     }
  //     else if (e.target.id == "ccn"){
  //       if (isNaN(value.replace(/ /g,'')) )
  //         return false;
  //       if (value.replace(/ /g,'').length < 17){
  //         this.setState({ccNumber:value})
  //       }
  //     }
  //     else if (e.target.id == "month"){
  //       if (isNaN(value) )
  //         return false;
  //       if (value.length > 2)
  //         return false
  //       this.setState({month:value})
  //     }
  //     else if (e.target.id == "year"){
  //       if (isNaN(value) )
  //         return false;
  //       if (value.length > 2)
  //         return false
  //       this.setState({year:value})
  //     }
  //     else if (e.target.id == "cvc"){
  //       if (isNaN(value) )
  //         return false;
  //       if (value.length > 3)
  //         return false
  //       this.setState({cvc:value})
  //     }
  //
  //   },
  //   render: function(){
  //     var state = this.state
  //     var numberClass='';
  //     var cvcClass='';
  //     var yearClass='';
  //     var bandNameClass='';
  //     var bandUrlClass='';
  //     var emailClass='';
  //     var fullNameClass='';
  //     var cardDiv;
  //     if(state.numberValid == false){
  //       numberClass = "invalid"
  //     }
  //     if(state.cvcValid == false){
  //       cvcClass = "invalid"
  //     }
  //     if(state.yearValid == false){
  //       yearClass = "invalid"
  //     }
  //     if(state.bandNameValid == false){
  //       bandNameClass = "invalid"
  //     }
  //     if(state.bandUrlValid == false){
  //       bandUrlClass = "invalid"
  //     }
  //     if(state.emailValid == false){
  //       emailClass = "invalid"
  //     }
  //     if(state.fullNameValid == false){
  //       fullNameClass = "invalid"
  //     }
  //
  //
  //     if(state.numberValid == false){
  //       numberClass = "invalid"
  //     }
  //     if(state.cvcValid == false){
  //       cvcClass = "invalid"
  //     }
  //     if(state.yearValid == false){
  //       yearClass = "invalid"
  //     }
  //     if(state.numberValid == true){
  //       numberClass = "valid"
  //     }
  //     if(state.cvcValid == true){
  //       cvcClass = "valid"
  //     }
  //     if(state.yearValid == true){
  //       yearClass = "valid"
  //     }
  //
  //     if(this.state.cardType && (this.state.cardType != "unknown")){
  //       cardDiv = <div className="card-type">{this.state.cardType}</div>
  //     }
  //
  //     return(
  //       <form onSubmit={this.handleSubmit} method="post" enctype="multipart/form-data" action="http://localhost:3000/tonethread_uploads" ref="form">
  //         <div className="half">
  //           <Shirt
  //             onButtonCLick={this.handleButtonClick}
  //             shirtState={this.state.shirtState}
  //             image={this.state.image}
  //             onInchesChange={this.handleInchesChange}
  //             onColorChange={this.handleColorChange}
  //             color={this.state.color}
  //             valid={this.state.imageValid}/>
  //         </div>
  //         <div className="half second">
  //           <input type="file" name="image" className="shirt-file" ref="file" onChange={this.handleFileChange} />
  //           <input type="hidden" name="inches" value={this.state.inches}/>
  //           <input type="hidden" name="color" value={this.state.color}/>
  //           <input type="hidden" name="stripeToken" value={this.state.stripeToken} />
  //           <input type="text" className={bandNameClass} name="band_name" placeholder="Band Name" onChange={this.handleTyping} ref="name" id="name" value={this.state.bandName}/>
  //           <input type="text" className={bandUrlClass} name="bancamp_url" placeholder="Band Camp URL" onChange={this.handleTyping} id="url" value={this.state.bandcampUrl} />
  //           <input type="text" className={emailClass} name="email" placeholder="Email" onChange={this.handleTyping} id="email" value={this.state.email} />
  //           <hr/>
  //           <input type="text"  className={fullNameClass} name="full_name" placeholder="Full Name" ref="full_name" value={this.state.fullName}  id="fullName" onChange={this.handleTyping}/>
  //           <input type="text" placeholder="Credit Card Number" ref="cc_number" className={numberClass} onBlur={this.validateCard} id="ccn" value={this.state.ccNumber} onChange={this.handleTyping}/>
  //           {cardDiv}
  //           <div className="eighty">
  //             <input placeholder="MM" ref="month" className={"quarter-input "+yearClass} onBlur={this.validateYear} id="month" value={this.state.month} onChange={this.handleTyping}/>
  //             <input placeholder="YY" ref="year" className={"quarter-input "+yearClass} onBlur={this.validateYear} id="year" value={this.state.year} onChange={this.handleTyping}/>
  //             <input placeholder="CVC" ref="cvc" className={"half-input "+cvcClass} onBlur={this.validateCVC} id="cvc" value={this.state.cvc} onChange={this.handleTyping}/>
  //           </div>
  //           <input type="submit" value="submit"/>
  //         </div>
  //       </form>
  //     )
  //   }
  // })
  //
  // var FormWrapper = React.createClass({
  //   getInitialState: function(){
  //     return {submitting:false}
  //   },
  //   handleSubmit: function(state){
  //     this.setState({submitting:true})
  //   },
  //   render: function(){
  //     var loader;
  //     if (this.state.submitting){
  //       loader = <div className="loader">
  //         <img alt="Loading" className="loader-image" src="http://www.threddit.clothing/assets/loading-d0df7f4e35df4273f32a597238bb9678.gif" />
  //         <div className="on-call-loader-text">loading
  //         </div>
  //       </div>
  //     }
  //     return(
  //       <div className="form">
  //         <Form onSubmit={this.handleSubmit}/>
  //         {loader}
  //       </div>
  //     )
  //   }
  // })
  //
  // React.render(
  //   <FormWrapper />,
  //   document.getElementById('container')
  // );
