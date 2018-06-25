import React from 'react';
import './list.css';
import Form from './forms';

const listFamily = ['Quentin', 'Plume', 'Perrine'];

const memberFamily = listFamily.map(
    (member, i) => 
    <li class="list-group-item" key={'member_' + i}>{member}</li>);

export default class ListComponent extends React.Component {
    render() {
        return (
            <div className="contenu">
                <div class="card offset-1 col-5">
                    <div class="card-header">This is my family</div>
                    <div class="card-body">
                        <ul class="list-group">{memberFamily}</ul>
                    </div>
                </div>
                <div className="card offset-1 col-4">
                    <Form />
                </div>
            </div>
        );
    }
};