<script>
import Comparison from './Comparison';

export default {
  functional: true,
  render (createElement, { children, props }) {
    const items = children.filter(node => node.name === "item");
    const description = children.find(child => child.name === 'description');
    const images = [];

    for (const item of items) {
      const { children } = item;
      if (children) {
        const image = children.find(child => child.name === 'image');
        if (image) images.push(image);
      }
    }

    return createElement(Comparison, { props: { ...props, items, description, images } });
  }
};
</script>