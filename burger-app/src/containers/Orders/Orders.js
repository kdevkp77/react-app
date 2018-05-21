import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../hoc/axios';
class Orders extends Component {
    state = {
        orderList: []
    }
    componentDidMount() {
        axios.get('/order.json').then(res => {
            const orderList = [];
            for(let key in res.data) {
                orderList.push({
                    ...res.data[key],
                    id: key
                })
            }
            this.setState({orderList: orderList});
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                {this.state.orderList.map(data => {
                    return (<Order 
                    key={data.id} 
                    ingredients={data.ingredients} 
                    price={data.totalPrice}/>)
                })} 
            </div>
        )
    }
}

export default Orders;