import { ComponentRegistry } from '../src/componentRegistry'

describe('Component registry', () => {
  test('Registering a new component type returns a new id', () => {
    class Component1 {}
    class Component2 {}

    let reg = new ComponentRegistry()

    let firstId = reg.register(Component1)
    let secondId = reg.register(Component2)
    expect(firstId).toBeDefined()
    expect(secondId).toBeDefined()
    expect(secondId).not.toEqual(firstId)
  })

  test('Registering same component type gives the same id', () => {
    class Component1 {}

    let reg = new ComponentRegistry()

    let id = reg.register(Component1)
    expect(id).toBeDefined()
    expect(reg.register(Component1)).toEqual(id)
    expect(reg.register(Component1)).toEqual(id)
  })

  test('Can get id of registered component', () => {
    class Component1 {}

    let reg = new ComponentRegistry()

    let id = reg.register(Component1)
    expect(id).toBeDefined()
    expect(reg.getId(Component1)).toEqual(id)
  })

  test('Get undefined id if component is not registered', () => {
    class Component1 {}

    let reg = new ComponentRegistry()

    expect(reg.getId(Component1)).toBeUndefined()
  })
})
