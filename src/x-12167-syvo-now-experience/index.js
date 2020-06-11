import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '../snc-now-experience-dashboard';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<snc-now-experience-dashboard/>
	);
};

createCustomElement('x-12167-syvo-now-experience', {
	renderer: {type: snabbdom},
	view,
	styles
});
