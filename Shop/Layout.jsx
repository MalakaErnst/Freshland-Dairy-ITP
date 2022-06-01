import React from 'react'
import Footer from '../Footer/Footer'
import { makeStyles } from '@material-ui/core/styles';
import AppDrawer from './Header/AppDrawer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    footer: {
        zIndex: theme.zIndex.drawer + 1
    },
}));

export default function Layout({ children }) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <AppDrawer />
                <div className={classes.content}>
                    <div className={classes.toolbar} />
                    <div>
                        {children}
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    )
}
