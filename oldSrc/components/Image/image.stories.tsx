
import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import {Image} from '../../index';
import {ImageProps} from './image';


export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ImageProps> = (args) => <Image {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { 
  bgColor: '#f1f1f1',
  width: 200,
  height: 200,
  alt: "这是一个图片",
  borderRadius: 20,
  imUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAA/CAMAAADzCVVPAAABDlBMVEVHcEz////////////////////////////////////////5+P/////////////zrsn////7Xlj////XXJz////////////NUr3///////+Dafr///+1VdX0W2zoVY7///+dWev6XlryWXL////3XGL////5XlrWUbTbUaz////7XlnIUsLjU5yEaPn7XlfsWICpXNziU5ySWfd/bfmFZfmfX+aCafmPW/j////8X1f1W2r4XGT6XF3zWnDeUarhUqPbULG0VtfjU5zAVMu6VNHxWXauVtzqVojMUsCOXPrGUsbpVo3lVJaUWvXWUbXuWH/sV4OZWfDnVZGpV+GdWeyhWOjSUbrvWHukWOWIY/oAnIodAAAAOHRSTlMAkrChgVAvwPDi0Q76JHEIF4FcGtlmuXA3xf4+b16Be2/ngc2rSTeOrkTS0VC09tY74uzgd4/kyTxnP6kAAAdESURBVGje5dr9X9o4GADwQHlpaWkLBSxjgAiioE7dbXfFm3O6t3Obzm23uf3//8i1TdomTZ6m9xHOj1x+UgiUb5+8PEmK0EMuGxfHx7s7G0c5qm5ePX36x8GzIx2tSxlcXJydnb18+Wp335Lhv1xdXV1eXv462FwT/+BToH/p619d7zgS/JcQf/nr16Pnznrgid7HX19vSPBY7+MfPXq2DvivX2O9z9/NaPubfyd6n3/w8IM/+PiVif2ek4Fn9b85a4Cn9D5/D4z95vdAf7VG+sH7tH4nC0/p/X5/8NDxN6zeb/lQPDd/snqff4RqQWmv4pcVqn4pQO/2qtq4eddLbN28D/UXiX4HxP/8Trp9FPsD5AWltAp8NfjmKmQ3gnfNu+I/x/ozot8Dqj7+mejJdP/7feE74XXVO+N5PRT5bz4+pb8vfC28rnfHTHPrltGHqR4U+W+8/oFH/u3t55tQ/ynWQ/h3vP6+8G7Y59t3xvP6DHxaf1945BZbnfKdR/vTQM+2fBDP6+8Nv5SydRrpP8Z6CH/O6x84/gTrb0I9bvkgntc/dDylJ6kejI/1UaqXB2+XhwVFKZgzcGLS3aZZMpuutQS87pbL5Uq+ObDxJ6/PxLN6Kd42yZTsF6NTFqya9HbXiCpU2zqI182wtOvBP/ViUFzy1rDglyDZrZRa5KtqpXoefFoP49/wegleL6keU1pNSQ2jpIvxFp7avU54/yrh39FwrwX/KKhSZL6qKOU3XhD97W085IP4WB8nutn4nuZxpWPTNcoqV0ErC/EE1sX3RoQvGalvMtpSPK+H8ZQeD3qZeNMTFc2lVm6iCkZdgCc1W6RdCPCiUpDgF4k+mu4h/Gten4UvUR6VirDai2oowl/cFkR+SG5c1Gxy4iVDcWMR6E98fZLsAFU3XvP6DHwc92o4RlluKfqNaiUV967Zs/V6b9ilo0Xj2+SDcS8G8arSdCu9thLd7G0JfhGG/uQ0TnQz8W/O6ekexrukB3YryWtNjW687WgUSGq4Ha9q8fgyaT9JhwHwqqnHAym+vmbJ8C+SIT+IPYzn9CDeInPOkJ34OklfrBuiUalp81Ndj9SkoijGt+jxfYY/ZUrwaT2E/8DrQfyQ6b/JPcGDtlGJhm9jJs3wKqQJ07OkEK/Z7H3EN0SGT+lBPNGfJ3oIr6vAGxbOeRTy872mNL2tExoTQhGe6hXUN3gVGZ7RZ+A5PYTHd70m6HCVsDUatkJuggxvt0TjtgjPzWtlT7LoJ3hGD+H/4vUQvgMPtXiMN1V8D2R4feyJ7pIIzyV0uiGZ6yM8rQfxjD6c8AC8ZcDdrY7nP1ngCb5KUlUkxQuupok+KsJTehjP6QG8m5VhhL0ejwkzGV5lktpMfBG4Ui58os/Ap/UAvplFo3JaS4YnSzRuhSpc2NwFH+sh/A9eD+BNcSdMp/wayoXX+JFhFXisB86rdn74+g+sHsCXsnbV20lEc+FVwU1cPj5KdPviqrs/Aj3BEz2AxymOLYt8Przo1y8H31/w+omwpnN9TetxqgfgcXB7sj6v5mv2hf8KH+qnwsC/4vV7AH6WlVaHKiNrVEgPeMMV4acLgX4k6PX74eE9qz+H8LoH7z7aOAeQrjqoe8RnacvBWwuRfs7p98mjC6z+OZThjeHA4vGgJF11hPgx0ZdXgkdzoX7EDnrWTvzgBjPqPYbwQ3CoIkueelWyriEZ3jZZzvZWgm8shPqTw36cgTiDY+qxFVrvQHjctj3BaRpe0HRJHqTasoVNk939WS5+ugD0p28nW/1+fzA4TD22kuj3ELieL4h+cjLPbSMLr0bGumxJSz6h1VeARyNQf8ocYdJ6nOr5rR7E22pqs5LZ4+jEKbDXZWNv17nNDLIR2rJXgOfbPa2/5R/cSPQWjI/yOKNE5e/1Dp2zFdl9erwE11r8oQXZ5KUbybLwzpNFztin9cGTS/DyLdqX1oYkmK4SnSrgYU6Ptt66Tcyym8H2bbSDSW1gkttUtZaOB0JP+v1bwWMrpNt/cCJ8t8AVE1nUyqSjFLvJzn00u9fjl4xaUelEx2wKh9e76UR3aXhL0Ov5/WzqsRWiD59Shk4L/F+tF8VvJZlNXcuoQO/b67VUors0fDrFFezqifT4OdUMPHNmk+TzM8FWtug0jzmxsTV2J295eDSR6T8zejzdHyEpHrnj9OtKamJvp08qtbbwlDbqIu2l4615Dn3y2EqoJ4/mZ+MR2qZjqxb4hFc3W/QRdnzkkj6ldVU60V0iHjmjHC3/Ix376BlVFSjJJe1modrStFaxtA3sWlVMZayp2lgx6ZyoyH4NmqlaUPCpTCW8SLQ7XAv+ESx8u8HrivQZhWkufZLq7aJ1Kv9Ov152v+XP8+sHaN2KlT3mJ4nu8T5aw9Ifwaleot910FoWqyFN8w/30doWZ/IkK80/7KO1Lk5jBKX5k320/mXamPMNf9J30P+kONPGZD4KusCT0XzS6E+Bev8ABO9UQXE72AYAAAAASUVORK5CYII=',
  onClick: () => alert('This is a Image')
};
