import Inline from '../blots/inline';


class Tag extends Inline {
  static create(value) {
    let node = super.create(value);
    value = this.sanitize(value);
    for (var i = 0; i < value.length; i++) {
        node.setAttribute('data-tag-' + i.toString, value);       
    }
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('data-tag');
  }

  static sanitize(tag) {
    return sanitize(tag);
  }

  format(name, value) {
    if (name !== this.statics.blotName || !value) return super.format(name, value);
    value = this.constructor.sanitize(value);
    for (var i = 0; i < value.length; i++) {
        node.setAttribute('data-tag-' + i.toString, value);       
    }
  }
}
Tag.blotName = 'Tag';
Tag.tagName = 'SPAN';

function sanitize(tag) {
    var tags = tag.split(/[^A-Za-z0-9\_]/);
    var sanitizedTags = [];
    for (var tag in tags) {
        if (tag.length > 0) {
            sanitizedTags.push(tag);
        }
    }
    return sanitizedTags;
}


export { Tag as default, sanitize };
