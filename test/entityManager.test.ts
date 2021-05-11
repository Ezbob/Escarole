import { EntityManager } from '../src/entityManager';

describe('EntityManager', () => {
  test('Can create entities', () => {
    let entityManager = new EntityManager();

    class Component {}
    class Component1 {}

    entityManager.createEntity(new Component(), new Component1());
    entityManager.createEntity(new Component(), new Component1());
    entityManager.createEntity(new Component());

    expect(entityManager.length).toEqual(3);
  });

  test('Can delete already created entities', () => {
    let entityManager = new EntityManager();

    class Component {}
    class Component1 {}

    let entity1 = entityManager.createEntity(new Component(), new Component1());
    let entity2 = entityManager.createEntity(new Component(), new Component1());

    expect(entityManager.length).toEqual(2);

    entityManager.deleteEntity(entity1);
    entityManager.deleteEntity(entity2);

    expect(entityManager.length).toEqual(0);
  });

  test('Can iterate over components to get entities', () => {
    let entityManager = new EntityManager();

    class Component {}
    class Component1 {}

    entityManager.createEntity(new Component(), new Component1());
    entityManager.createEntity(new Component(), new Component1());
    entityManager.createEntity(new Component());

    let twoComponents = 0;
    let oneComponent = 0;

    for (let entity of entityManager) {
      let comp = entity.getComponent(Component);
      let comp1 = entity.getComponent(Component1);

      if (comp && comp1) {
        twoComponents++;
      }

      if (comp && !comp1) {
        oneComponent++;
      }
    }

    expect(twoComponents).toEqual(2);
    expect(oneComponent).toEqual(1);
  });

  test('Can get filtered entities from iterator', () => {
    let entityManager = new EntityManager();

    class Component {}
    class Component2 {}

    entityManager.createEntity(new Component(), new Component2());
    entityManager.createEntity(new Component(), new Component2());
    entityManager.createEntity(new Component(), new Component2());
    entityManager.createEntity(new Component());
    entityManager.createEntity(new Component2());

    let foundEntities = 0;

    for (let f of entityManager.getEntities(Component, Component2)) {
      let c1 = f.getComponent(Component);
      expect(c1).toBeDefined();
      expect(c1).toBeInstanceOf(Component);

      let c2 = f.getComponent(Component2);

      expect(c2).toBeDefined();
      expect(c2).toBeInstanceOf(Component2);

      if (c1 && c2) {
        foundEntities++;
      }
    }

    expect(foundEntities).toEqual(3);
  });

  test('Can get unfiltered entities from iterator', () => {
    let entityManager = new EntityManager();

    class Component {}
    class Component2 {}

    entityManager.createEntity(new Component(), new Component2());
    entityManager.createEntity(new Component(), new Component2());
    entityManager.createEntity(new Component(), new Component2());
    entityManager.createEntity(new Component());
    entityManager.createEntity(new Component2());

    let foundEntities = 0;

    for (let f of entityManager.getEntities()) {
      expect(f).toBeDefined();
      foundEntities++;
    }

    expect(foundEntities).toEqual(entityManager.length);
  });
});
