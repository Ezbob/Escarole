import { ComponentRegistry } from './componentRegistry'

export class Entity {
  readonly id: number
  private componentRegistry: ComponentRegistry
  private components: Map<number, any> = new Map()

  constructor(componentRegistry: ComponentRegistry, id: number) {
    this.id = id
    this.componentRegistry = componentRegistry
  }

  getComponent<T>(c: ComponentConstructor<T>): T | undefined {
    let cid = this.componentRegistry.getId(c)
    return this.components.get(cid as number)
  }

  deleteComponent(...components: ComponentConstructor[]) {
    for (let component of components) {
      let cid = this.componentRegistry.getId(component)
      this.components.delete(cid as number)
    }
  }

  addComponent(...components: ComponentInstance[]) {
    for (let component of components) {
      let componentId = this.componentRegistry.register(
        component.constructor as ComponentConstructor
      )
      this.components.set(componentId, component)
    }
  }
}
