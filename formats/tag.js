import Inline from '../blots/inline';

class Tag extends Inline {
  static create(value) {
    const node = super.create(value);
    const tags = this.sanitize(value);
    for (let i = 0; i < tags.length; i += 1) {
      const tagIndex = (i + 1).toString;
      node.setAttribute(`data-tag-{$tagIndex}`, tags[i]);
    }
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('data-tag-1');
  }

  static sanitize(tag) {
    return sanitize(tag);
  }

  format(name, value) {
    if (name !== this.statics.blotName || !value) {
      super.format(name, value);
    } else {
      const tags = this.constructor.sanitize(value);
      for (let i = 0; i < tags.length; i += 1) {
        const tagIndex = (i + 1).toString;
        this.domNode.setAttribute(`data-tag-{$tagIndex}`, value);
      }
    }
  }
}
Tag.blotName = 'Tag';
Tag.tagName = 'SPAN';

function sanitize(tag) {
  const tags = tag.split(/[^A-Za-z0-9\_]/);
  const sanitizedTags = [];
  for (const tag in tags) {
    if (tag.length > 0) {
      sanitizedTags.push(tag);
    }
  }
  return sanitizedTags;
}

export { Tag as default, sanitize };
