import { Component } from '@angular/core';

export function ExtendedComponent(extendedConfig: Component = {}) {
  return function (target: Function) {
    const ANNOTATIONS = '__annotations__';
    const PARAMETERS = '__paramaters__';
    const PROP_METADATA = '__prop__metadata__';

    const annotations = target[ANNOTATIONS] || [];
    const parameters = target[PARAMETERS] || [];
    const propMetadata = target[PROP_METADATA] || [];

    if (annotations.length > 0) {
      const parentAnnotations = Object.assign({}, annotations[0]);

      Object.keys(parentAnnotations).forEach(key => {
        if (parentAnnotations.hasOwnProperty(key)) {
          if (!extendedConfig.hasOwnProperty(key)) {
            extendedConfig[key] = parentAnnotations[key];
            annotations[0][key] = '';
          } else {
            if (extendedConfig[key] === parentAnnotations[key]) {
              annotations[0][key] = '';
            }
          }
        }
      });
    }
    return Component(extendedConfig)(target);
  };
}
