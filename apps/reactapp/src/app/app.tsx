// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TopicButton } from '@kadev/shared/ui';
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="reactapp" />
      <div />
      <TopicButton topicName='React' />
    </>
  );
}

export default App;
