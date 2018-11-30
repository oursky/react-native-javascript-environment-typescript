interface ArrayConstructor {
  /**
   * Creates an array from an array-like object.
   * @param arrayLike An array-like object to convert to an array.
   */
  from<T>(arrayLike: ArrayLike<T>): T[];

  /**
   * Creates an array from an iterable object.
   * @param arrayLike An array-like object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T, U>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => U,
    thisArg?: any
  ): U[];
}

interface NumberConstructor {
    /**
     * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1
     * that is representable as a Number value, which is approximately:
     * 2.2204460492503130808472633361816 x 10‍−‍16.
     */
    readonly EPSILON: number;

    /**
     * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a
     * number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter
     * to a number. Only values of the type number, that are also NaN, result in true.
     * @param number A numeric value.
     */
    isNaN(number: number): boolean;

    /**
     * The value of the largest integer n such that n and n + 1 are both exactly representable as
     * a Number value.
     * The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.
     */
    readonly MAX_SAFE_INTEGER: number;

    /**
     * The value of the smallest integer n such that n and n − 1 are both exactly representable as
     * a Number value.
     * The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).
     */
    readonly MIN_SAFE_INTEGER: number;
}

interface ObjectConstructor {
  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source The source object from which to copy properties.
   */
  assign<T, U>(target: T, source: U): T & U;

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source1 The first source object from which to copy properties.
   * @param source2 The second source object from which to copy properties.
   */
  assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source1 The first source object from which to copy properties.
   * @param source2 The second source object from which to copy properties.
   * @param source3 The third source object from which to copy properties.
   */
  assign<T, U, V, W>(
    target: T,
    source1: U,
    source2: V,
    source3: W
  ): T & U & V & W;

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param sources One or more source objects from which to copy properties
   */
  assign(target: object, ...sources: any[]): any;

  /**
   * Returns an array of values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];

  /**
   * Returns an array of values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  values(o: {}): any[];

  /**
   * Returns an array of key/values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];

  /**
   * Returns an array of key/values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries(o: {}): [string, any][];
}

interface Array<T> {
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find<S extends T>(
    predicate: (this: void, value: T, index: number, obj: T[]) => value is S,
    thisArg?: any
  ): S | undefined;
  find(
    predicate: (value: T, index: number, obj: T[]) => boolean,
    thisArg?: any
  ): T | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: T, index: number, obj: T[]) => boolean,
    thisArg?: any
  ): number;
}

interface ReadonlyArray<T> {
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find<S extends T>(
    predicate: (
      this: void,
      value: T,
      index: number,
      obj: ReadonlyArray<T>
    ) => value is S,
    thisArg?: any
  ): S | undefined;
  find(
    predicate: (value: T, index: number, obj: ReadonlyArray<T>) => boolean,
    thisArg?: any
  ): T | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: T, index: number, obj: ReadonlyArray<T>) => boolean,
    thisArg?: any
  ): number;
}

interface String {
  /**
   * Returns true if searchString appears as a substring of the result of converting this
   * object to a String, at one or more positions that are
   * greater than or equal to position; otherwise, returns false.
   * @param searchString search string
   * @param position If position is undefined, 0 is assumed, so as to search all of the String.
   */
  includes(searchString: string, position?: number): boolean;

  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * endPosition – length(this). Otherwise returns false.
   */
  endsWith(searchString: string, endPosition?: number): boolean;

  /**
   * Returns a String value that is made from count copies appended together. If count is 0,
   * the empty string is returned.
   * @param count number of copies to append
   */
  repeat(count: number): string;

  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * position. Otherwise returns false.
   */
  startsWith(searchString: string, position?: number): boolean;

  /**
   * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
   * The padding is applied from the start (left) of the current string.
   *
   * @param maxLength The length of the resulting string once the current string has been padded.
   *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
   *
   * @param fillString The string to pad the current string with.
   *        If this string is too long, it will be truncated and the left-most part will be applied.
   *        The default value for this parameter is " " (U+0020).
   */
  padStart(maxLength: number, fillString?: string): string;

  /**
   * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
   * The padding is applied from the end (right) of the current string.
   *
   * @param maxLength The length of the resulting string once the current string has been padded.
   *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
   *
   * @param fillString The string to pad the current string with.
   *        If this string is too long, it will be truncated and the left-most part will be applied.
   *        The default value for this parameter is " " (U+0020).
   */
  padEnd(maxLength: number, fillString?: string): string;
}
