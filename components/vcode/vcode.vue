<script>
import renderVcode from './renderVcode';

export default {
  name: 'Vcode',
  functional: true,
  render(createElement, { props }) {
    let body;
    if (typeof props.body === 'string') {
      body = JSON.parse(props.body);
    } else if ((typeof props.body === 'object') && ('parsed' in props.body)) {
      const { parsed } = props.body;
      body = typeof parsed === 'string' ? JSON.parse(parsed) : parsed;
    } else if (Array.isArray(props.body)) {
      body = props.body;
    } else {
      body = ['Error processing vcode.'];
    }

    const type = props.type || 'div';
    const data = props.data || {};

    return createElement(type, { class: "vcode-document" }, renderVcode(createElement, data, body));
  }
};

</script>