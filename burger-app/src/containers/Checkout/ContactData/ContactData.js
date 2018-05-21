import React, {Component} from 'react';
import './ContactData.css';
import axiosInstance from '../../../hoc/axios';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import Input from '../../../components/UI/Input/Input';
import {connect} from 'react-redux';


class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                valid: true,
                initial: true
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                valid: true,
                initial: true
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street Name'
                },
                value: '',
                valid: true,
                initial: true
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Postal Code'
                },
                value: '',
                valid: true,
                initial: true
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{value:'fastest', displayValue: 'Fastest'},
                    {value:'cheapest', displayValue: 'Cheapest'}]
                },
                value: 'fastest',
                initial: true
            }
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        let customerObj= {};
        let validation = true;
        let inputData = {
            ...this.state.orderForm
        }
        for(let info in this.state.orderForm) {
            if (this.state.orderForm[info].value === '') {
                inputData[info].valid = false;
                validation = false;
            }
            customerObj[info] = this.state.orderForm[info].value;
            // customerInfo.push({
            //     key: info,
            //     order: this.state.orderForm[info]
            // })
        }
        this.setState({orderForm: inputData});
        // customerInfo.map(res => {
        //     switch(res.key) {
        //         case ('name'): customerObj.name = res.order.value;
        //         break;
        //         case ('email'): customerObj.email = res.order.value;
        //         break;
        //         case ('street'): customerObj.street = res.order.value;
        //         break;
        //         case ('zipCode'): customerObj.zipCode = res.order.value;
        //         break;
        //         case ('deliveryMethod'): customerObj.deliveryMethod = res.order.value;
        //         break;
        //     }
        // })
        if(validation) {
            const order = {
            ingredients: this.props.ing,
            totalPrice: this.props.totalPrice,
            order: customerObj
          }
          axiosInstance.post('/order.json', order)
          .then(response => {
              this.setState({loading: false})
              this.props.history.push('/');
          })
          .catch(err => this.setState({loading: false}));
        }    
    }
    changeHandler = (event,id) => {
        const updateValue = {
            ...this.state.orderForm
        }
        updateValue[id].value = event.target.value;
        event.target.value === '' ? updateValue[id].valid = false : updateValue[id].valid = true;
        updateValue[id].initial = false;
        this.setState({orderForm: updateValue, validation: true});
    }
    render() {
        let orderInfo = [];
        let domContent = null;
        for(let key in this.state.orderForm) {
            orderInfo.push({
                id: key,
                inputField: this.state.orderForm[key],
                validation:  this.state.validation
            })
        }
        domContent = <form onSubmit={this.orderHandler}>
        {orderInfo.map(res => {
          return (
            <Input 
            inputtype={res.inputField.elementType} 
            info={res.inputField.elementConfig}
            key={res.id}
            initial={res.inputField.initial}
            getOrder={res.inputField.valid}
            changed={(event) => this.changeHandler(event,res.id)}/>
          )
        })}

    <button className="OrderButton Danger">ORDER</button>   
</form>;
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {/* {this.state.loading ? 
                <Spinner/> : domContent 
                }  */}
                {domContent}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      ing: state.reducer.ingredients,
      totalPrice: state.reducer.totalPrice
    }
  }
export default connect(mapStateToProps)(withRouter(ContactData));