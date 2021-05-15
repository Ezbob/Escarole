import { Entity } from '../src/entity';

describe('Entity', () => {
  test('Can assign id to entity', () => {
    let entityId = 42;
    let entity = new Entity(entityId);

    expect(entity.id).toBe(entityId);
  });

  test('Component can be added to a entity', () => {
    let entityId = 0;
    let entity = new Entity(entityId);

    class Component {
      constructor(public x: number, public y: number) {}
    }

    entity.addComponent(new Component(1, 2));

    let componentInstance = entity.getComponent(Component);
    expect(componentInstance).toBeDefined();
    expect(componentInstance).toBeInstanceOf(Component);

    expect((componentInstance as Component).x).toBeDefined();
    expect((componentInstance as Component).y).toBeDefined();

    expect((componentInstance as Component).x).toEqual(1);
    expect((componentInstance as Component).y).toEqual(2);
  });

  test('Getting a non-existing component on entity returns an undefined component', () => {
    let entityId = 0;
    let entity = new Entity(entityId);

    class Component {}

    expect(entity.getComponent(Component)).toBeUndefined();
    expect(entity.getComponent(Component)).not.toBeInstanceOf(Component);
  });

  test('Can remove an existing component from a entity', () => {
    let entityId = 0;
    let entity = new Entity(entityId);

    class Component {}

    entity.addComponent(new Component());

    expect(entity.getComponent(Component)).toBeDefined();
    expect(entity.getComponent(Component)).toBeInstanceOf(Component);

    entity.deleteComponent(Component);

    expect(entity.getComponent(Component)).toBeUndefined();
  });
});
