import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons(){
    return <div className="SwipeButtons">
        <IconButton className="SwipeButtons_repeat">
            <ReplayIcon fontSize="large" ></ReplayIcon>
        </IconButton>
        <IconButton className="SwipeButtons_left">
            <CloseIcon fontSize="large" ></CloseIcon>
        </IconButton>
        <IconButton className="SwipeButtons_star">
            <StarRateIcon fontSize="large" ></StarRateIcon>
        </IconButton>
        <IconButton className="SwipeButtons_right">
            <FavoriteIcon fontSize="large" ></FavoriteIcon>
        </IconButton>
        <IconButton className="SwipeButtons_lightning">
            <FlashOnIcon fontSize="large" ></FlashOnIcon>
        </IconButton>

    </div>

}
export default SwipeButtons