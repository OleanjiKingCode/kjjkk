// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class RandomNumber extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RandomNumber entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RandomNumber must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RandomNumber", id.toString(), this);
    }
  }

  static load(id: string): RandomNumber | null {
    return changetype<RandomNumber | null>(store.get("RandomNumber", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get RandomnessValue(): BigInt {
    let value = this.get("RandomnessValue");
    return value!.toBigInt();
  }

  set RandomnessValue(value: BigInt) {
    this.set("RandomnessValue", Value.fromBigInt(value));
  }

  get Result(): BigInt {
    let value = this.get("Result");
    return value!.toBigInt();
  }

  set Result(value: BigInt) {
    this.set("Result", Value.fromBigInt(value));
  }

  get Date(): BigInt {
    let value = this.get("Date");
    return value!.toBigInt();
  }

  set Date(value: BigInt) {
    this.set("Date", Value.fromBigInt(value));
  }
}
