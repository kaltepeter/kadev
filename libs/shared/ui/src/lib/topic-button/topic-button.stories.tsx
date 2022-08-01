import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { TopicButton } from './topic-button';

export default {
  component: TopicButton,
  title: 'TopicButton',
  argTypes: {
    onClick: { action: 'onClick executed' },
  },
} as ComponentMeta<typeof TopicButton>;

const Template: ComponentStory<typeof TopicButton> = (args) => {
  const [clickedTopic, setClickedTopic] = useState<string | null>();
  return (
    <div className="bg-gray-300 p-20">
      <TopicButton
        {...args}
        onClick={(topicName) => setClickedTopic(topicName)}
      />
      {clickedTopic && <div>Button has been clicked: {clickedTopic}</div>}
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  topicName: 'Next.js',
};