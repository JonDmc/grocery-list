import React from "react";
import { useState } from "react";

const Form = ({ handleTextChange, category, item }) => {
    return (
        <>
            <form className='subContainer'>
                <label htmlFor='category'>Category: </label>
                <input
                    name='category'
                    onChange={handleTextChange}
                    value={category}
                    type='number'
                />
                <br />
                <label htmlFor='item'>Item: </label>
                <input
                    name='item'
                    onChange={handleTextChange}
                    value={item}
                    type='text'
                />

                <br />
                <br />
                <input type='submit' />

            </form>
        </>
    )
}

export default Form