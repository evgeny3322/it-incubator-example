import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {UnRating} from "../../components/UnRating/UnRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/UnRating',
    component: UnRating,
} as ComponentMeta<typeof UnRating>;

const callback = action("accordion mode change event fired")

export const UnRatingTrue = () => <UnRating value={0}/>;
export const UnRatingFalse = () => <UnRating value={1}/>;

