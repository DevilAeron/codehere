import React from 'react'
import Getdata from '../Getdata/Getdata'

function Modall(props) {
    const dt = '#' + props.id;
    const dtitle = props.id + 'Title';
    return (
        <>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={dt}>
                {props.name}
            </button>

            <div class="modal" id={props.id} tabindex="-1" role="dialog" aria-labelledby={dtitle} aria-hidden="true">
                <div class="modal-fullcreen" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id={dtitle}>Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Getdata url = {props.url}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modall;