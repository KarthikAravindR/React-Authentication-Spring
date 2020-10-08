import React from 'react'
import classes from './Calculatorcontrols.module.css'

const calculatorcontrols = (props) => {
    return(
        <div className={classes.calculatorControls}>
            
            <div className={classes.rows}>
                <div className={classes.numbers}>AC</div>
                <div className={classes.numbers}>+/-</div>
                <div className={classes.numbers}>%</div>
                <div className={classes.numbers}>/</div>
            </div>
            <div className={classes.rows}>
                <div className={classes.numbers}>7</div>
                <div className={classes.numbers}>8</div>
                <div className={classes.numbers}>9</div>
                <div className={classes.numbers}>*</div>
            </div>
            <div className={classes.rows}>
                <div className={classes.numbers}>4</div>
                <div className={classes.numbers}>5</div>
                <div className={classes.numbers}>6</div>
                <div className={classes.numbers}>-</div>
            </div>
            <div className={classes.rows}>
                <div className={classes.numbers}>1</div>
                <div className={classes.numbers}>2</div>
                <div className={classes.numbers}>3</div>
                <div className={classes.numbers}>+</div>
            </div>
            <div className={classes.rows}>
                <div className={classes.number0}>0</div>
                <div className={classes.numbers}>.</div>
                <div className={classes.equalTo}>=</div>
            </div>
        </div>
    )
}

export default calculatorcontrols