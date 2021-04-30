<script>
import renderVcode from './renderVcode';

export default {
  name: 'Vcode',
  functional: true,
  render(createElement, { props }) {
    const body = typeof props.body === 'string' ? JSON.parse(props.body) : props.body;
    const type = props.type || 'div';
    const data = props.data || {};

    return createElement(type, { class: "vcode-document" }, renderVcode(createElement, data, body));
  }
};

</script>