import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Rating, {RatingPropsType} from "../../components/Rating/Rating";

export default {
    title: 'components/Rating stories',
    component: Rating,
} as ComponentMeta<typeof Rating>;

export const EmptyStars: ComponentStory<typeof Rating> = (args) => <Rating  {...args} value={0}/>;
export const EmptyOne: ComponentStory<typeof Rating> = (args) => <Rating {...args} value={1}/>;
export const EmptyThree = () => {
    <Rating value={1}/>
}
