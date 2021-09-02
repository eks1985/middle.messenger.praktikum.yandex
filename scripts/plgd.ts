import { render } from '../modules/block';
import UserProfile from '../markup/components/profile';

const profile = new UserProfile();

render('.app', profile);