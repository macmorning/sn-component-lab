import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '../snc-now-experience-dashboard';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<snc-now-experience-dashboard/>
	);
};

createCustomElement('snc-syvo-now-experience-dashboard', {
	renderer: {type: snabbdom},
	view,
	styles
});
