import Button from "./Button.vue";
// import "../../../src/globals/scss/styles.scss";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Button v-bind="args"/>',
});

export const FirstStory = Template.bind({
  variant: "primary",
});

export const SecondStory = Template.bind({});

SecondStory.args = { variant: "secondary" };
