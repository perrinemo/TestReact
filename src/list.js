import React from 'react';
import './list.css';
import Form from './forms';

const listFamily = ['Quentin', 'Plume', 'Perrine'];

const memberFamily = listFamily.map(
    (member, i) => 
    <li class="list-group-item" key={'member_' + i}>{member}</li>);

class ListComponent extends React.Component {
    render() {
        return (
            <div>
                <div class="card">
                    <div class="card-header">This is my family</div>
                    <div class="card-body">
                        <ul class="list-group">{memberFamily}</ul>
                    </div>
                </div>
                <Form />
            </div>
        );
    }
};

export default ListComponent;