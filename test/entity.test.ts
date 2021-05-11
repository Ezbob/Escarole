import { ComponentRegistry } from '../src/componentRegistry';
import { Entity } from '../src/entity';

describe('Entity', () => {
  let registry: ComponentRegistry;
  beforeEach(() => {
    registry = new ComponentRegistry();
  });

  test('Can assign id to entity', () => {
    let entityId = 42;
    let entity = new Entity(registry, entityId);

    expect(entity.id).toBe(entityId);
  });

  test('Component can be added to a entity', () => {
    let entityId = 0;
    let entity = new Entity(registry, entityId);

    class Component {}

    entity.addComponent(new Component());
    expect(entity.getComponent(Component)).toBeDefined();
    expect(entity.getComponent(Component)).toBeInstanceOf(Component);
  });

  test('Getting a non-existing component on entity returns an undefined component', () => {
    let entityId = 0;
    let entity = new Entity(registry, entityId);

    class Component {}

    expect(entity.getComponent(Component)).toBeUndefined();
    expect(entity.getComponent(Component)).not.toBeInstanceOf(Component);
  });

  test('Can remove an existing component from a entity', () => {
    let entityId = 0;
    let entity = new Entity(registry, entityId);

    class Component {}

    entity.addComponent(new Component());

    expect(entity.getComponent(Component)).toBeDefined();
    expect(entity.getComponent(Component)).toBeInstanceOf(Component);

    entity.deleteComponent(Component);

    expect(entity.getComponent(Component)).toBeUndefined();
  });
});
