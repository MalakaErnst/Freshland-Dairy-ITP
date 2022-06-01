import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Grow } from '@material-ui/core';
import '../ProductList/ProductCard.css'
import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../../redux/shoping/shopping-action'
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function CartItem({ item, removeFromCart, adjustQty }) {

    const classes = useStyles();
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (qtyValue) => {
        setInput(qtyValue.target.value)
        adjustQty(item.id, qtyValue.target.value)
    }

    return (
        <>
            <div className="box">
                <Grow
                    in={true}
                    style={{ transformOrigin: '1 1 1' }}
                    {...(true ? { timeout: 1000 } : {})}
                >
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={item.url} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {item.description}
                                            </Typography>
                                        </Grid>
                                        <div style={{ alignSelf: 'center' }}>
                                            <input style={{ width: 60 }} type="number" className="form-control" id="inputPassword2" placeholder="1" min="1" max="10" value={item.qty} onChange={onChangeHandler} />
                                        </div>
                                        <Grid item>
                                            <Tooltip title="Delete">
                                                <IconButton aria-label="Remove" onClick={() => removeFromCart(item.id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">Rs.{item.price}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Grow>
            </div>
        </>
    );
}

const mapDispatchProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}

export default connect(null, mapDispatchProps)(CartItem)