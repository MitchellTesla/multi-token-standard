/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ERC1155ReceiverMockInterface extends ethers.utils.Interface {
  functions: {
    "lastData()": FunctionFragment;
    "lastId()": FunctionFragment;
    "lastOperator()": FunctionFragment;
    "lastValue()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setShouldReject(bool)": FunctionFragment;
    "shouldReject()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "lastData", values?: undefined): string;
  encodeFunctionData(functionFragment: "lastId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastOperator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lastValue", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setShouldReject",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "shouldReject",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "lastData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lastValue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShouldReject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shouldReject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "TransferBatchReceiver(address,address,uint256[],uint256[])": EventFragment;
    "TransferSingleReceiver(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TransferBatchReceiver"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingleReceiver"): EventFragment;
}

export class ERC1155ReceiverMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ERC1155ReceiverMockInterface;

  functions: {
    lastData(overrides?: CallOverrides): Promise<[string]>;

    "lastData()"(overrides?: CallOverrides): Promise<[string]>;

    lastId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lastId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastOperator(overrides?: CallOverrides): Promise<[string]>;

    "lastOperator()"(overrides?: CallOverrides): Promise<[string]>;

    lastValue(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lastValue()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      arg3: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      arg3: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      _from: string,
      _id: BigNumberish,
      arg3: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      _from: string,
      _id: BigNumberish,
      arg3: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setShouldReject(
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setShouldReject(bool)"(
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shouldReject(overrides?: CallOverrides): Promise<[boolean]>;

    "shouldReject()"(overrides?: CallOverrides): Promise<[boolean]>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  lastData(overrides?: CallOverrides): Promise<string>;

  "lastData()"(overrides?: CallOverrides): Promise<string>;

  lastId(overrides?: CallOverrides): Promise<BigNumber>;

  "lastId()"(overrides?: CallOverrides): Promise<BigNumber>;

  lastOperator(overrides?: CallOverrides): Promise<string>;

  "lastOperator()"(overrides?: CallOverrides): Promise<string>;

  lastValue(overrides?: CallOverrides): Promise<BigNumber>;

  "lastValue()"(overrides?: CallOverrides): Promise<BigNumber>;

  onERC1155BatchReceived(
    arg0: string,
    _from: string,
    _ids: BigNumberish[],
    arg3: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
    arg0: string,
    _from: string,
    _ids: BigNumberish[],
    arg3: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    _from: string,
    _id: BigNumberish,
    arg3: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onERC1155Received(address,address,uint256,uint256,bytes)"(
    arg0: string,
    _from: string,
    _id: BigNumberish,
    arg3: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setShouldReject(
    _value: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setShouldReject(bool)"(
    _value: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shouldReject(overrides?: CallOverrides): Promise<boolean>;

  "shouldReject()"(overrides?: CallOverrides): Promise<boolean>;

  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    lastData(overrides?: CallOverrides): Promise<string>;

    "lastData()"(overrides?: CallOverrides): Promise<string>;

    lastId(overrides?: CallOverrides): Promise<BigNumber>;

    "lastId()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastOperator(overrides?: CallOverrides): Promise<string>;

    "lastOperator()"(overrides?: CallOverrides): Promise<string>;

    lastValue(overrides?: CallOverrides): Promise<BigNumber>;

    "lastValue()"(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      arg3: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      arg3: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      _from: string,
      _id: BigNumberish,
      arg3: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      _from: string,
      _id: BigNumberish,
      arg3: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    setShouldReject(_value: boolean, overrides?: CallOverrides): Promise<void>;

    "setShouldReject(bool)"(
      _value: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    shouldReject(overrides?: CallOverrides): Promise<boolean>;

    "shouldReject()"(overrides?: CallOverrides): Promise<boolean>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    TransferBatchReceiver(
      _from: null,
      _to: null,
      _fromBalances: null,
      _toBalances: null
    ): TypedEventFilter<
      [string, string, BigNumber[], BigNumber[]],
      {
        _from: string;
        _to: string;
        _fromBalances: BigNumber[];
        _toBalances: BigNumber[];
      }
    >;

    TransferSingleReceiver(
      _from: null,
      _to: null,
      _fromBalance: null,
      _toBalance: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        _from: string;
        _to: string;
        _fromBalance: BigNumber;
        _toBalance: BigNumber;
      }
    >;
  };

  estimateGas: {
    lastData(overrides?: CallOverrides): Promise<BigNumber>;

    "lastData()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastId(overrides?: CallOverrides): Promise<BigNumber>;

    "lastId()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastOperator(overrides?: CallOverrides): Promise<BigNumber>;

    "lastOperator()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastValue(overrides?: CallOverrides): Promise<BigNumber>;

    "lastValue()"(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      arg3: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      arg3: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      _from: string,
      _id: BigNumberish,
      arg3: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      _from: string,
      _id: BigNumberish,
      arg3: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setShouldReject(
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setShouldReject(bool)"(
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shouldReject(overrides?: CallOverrides): Promise<BigNumber>;

    "shouldReject()"(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    lastData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastData()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastOperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastOperator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastValue()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      arg3: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      arg3: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      _from: string,
      _id: BigNumberish,
      arg3: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      _from: string,
      _id: BigNumberish,
      arg3: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setShouldReject(
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setShouldReject(bool)"(
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shouldReject(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "shouldReject()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
