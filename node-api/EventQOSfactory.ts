class EventQOSfactory {
  public static createAtMostOnce(config?: kafkaConfigAtmostOnce): AtMostOnce {
    return new this.createAtMostOnce(config);
  }
  public static createAtLeatOnce(config?: kafkaConfigAtLeastOnce): AtLeastOnce {
    return new this.createAtMostOnce(config);
  }
  public static createExactlyOnce(
    config?: kafkaConfigExactlyOnce,
  ): ExactlyOnce {
    return new this.createAtMostOnce(config);
  }
}

export { EventQOSfactory };

//npm run produce
//DLQ
/*
AtMostOnce
AtLeastOnce,
ExactlyOnce
*/
