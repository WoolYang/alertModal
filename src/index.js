require('./style.css');
require('./alertModal.css');
import alertModal from './alertModal.js'

export default alertModal;
if (typeof window !== 'undefined') {
	window.alertModal = alertModal;
}