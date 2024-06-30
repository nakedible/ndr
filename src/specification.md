# Natural Die Roll (NDR) System Reference Document (SRD)

## Introduction

Natural Die Roll (NDR) is a novel dice rolling mechanism designed for
tabletop role-playing games. It provides 

The NDR System Reference Document (SRD) provides the rules on how to use NDR and
to build a role playing game system on it.

## Basic die roll mechanic

The Natural Die Roll (NDR) is defined as:

<div style="font-size: 400%">
2d6 - 2d6
</div>

For physical dice:
- Use two sets of two six-sided dice (2d6), each set a different color.
- Recommended colors are black (positive) and red (negative), but any two distinct colors work.
- Roll all four dice together.
- Subtract the total of one color from the total of the other color.

For digital tools:
- For Foundry VTT with Dice So Nice you can use `/r 2d6[black] - 2d6[red]`
- If dice subtraction isn't supported in your roller, use the equivalent **4d6 - 14** instead.

### Properties

| Property                   | Value                                            |
|----------------------------|--------------------------------------------------|
| Range                      | -10 to +10                                       |
| Possible outcomes          | 21                                               |
| Outcomes with 5% threshold | 15 (≤ -7, -6 ... +6, ≥ +7)                       |
| Average (mean)             | 0                                                |
| Median                     | 0                                                |
| Standard deviation         | \\( \sqrt{\frac{35}{3}} \approx 3.41565 \\)      |

### Probability Distribution

| Result | Probability | Approx. 1/x | Approximate |
|--------|-------------|-------------|-------------|
| -10    | 1/1296      | ~1/1296     | ~0.08%      |
| -9     | 4/1296      | ~1/324      | ~0.31%      |
| -8     | 10/1296     | ~1/130      | ~0.77%      |
| -7     | 20/1296     | ~1/65       | ~1.54%      |
| -6     | 35/1296     | ~1/37       | ~2.70%      |
| -5     | 56/1296     | ~1/23       | ~4.32%      |
| -4     | 80/1296     | ~1/16       | ~6.17%      |
| -3     | 104/1296    | ~1/12       | ~8.02%      |
| -2     | 125/1296    | ~1/10       | ~9.65%      |
| -1     | 140/1296    | ~1/9        | ~10.80%     |
| 0      | 146/1296    | ~1/8        | ~11.27%     |
| +1     | 140/1296    | ~1/9        | ~10.80%     |
| +2     | 125/1296    | ~1/10       | ~9.65%      |
| +3     | 104/1296    | ~1/12       | ~8.02%      |
| +4     | 80/1296     | ~1/16       | ~6.17%      |
| +5     | 56/1296     | ~1/23       | ~4.32%      |
| +6     | 35/1296     | ~1/37       | ~2.70%      |
| +7     | 20/1296     | ~1/65       | ~1.54%      |
| +8     | 10/1296     | ~1/130      | ~0.77%      |
| +9     | 4/1296      | ~1/324      | ~0.31%      |
| +10    | 1/1296      | ~1/1296     | ~0.08%      |

### Cumulative Distribution

| Result      | Probability | Approx. Fraction | Approximate |
|-------------|-------------|------------------|-------------|
| -10 or more | 1296/1296   | 1/1              | 100%        |
| -9 or more  | 1295/1296   | ~1295/1296       | ~99.92%     |
| -8 or more  | 1291/1296   | ~258/259         | ~99.61%     |
| -7 or more  | 1281/1296   | ~85/86           | ~98.84%     |
| -6 or more  | 1261/1296   | ~36/37           | ~97.30%     |
| -5 or more  | 1226/1296   | ~18/19           | ~94.60%     |
| -4 or more  | 1170/1296   | ~9/10            | ~90.28%     |
| -3 or more  | 1090/1296   | ~5/6             | ~84.10%     |
| -2 or more  | 986/1296    | ~3/4             | ~76.08%     |
| -1 or more  | 861/1296    | ~2/3             | ~66.44%     |
| 0 or more   | 721/1296    | ~5/9             | ~55.63%     |
| +1 or more  | 575/1296    | ~4/9             | ~44.37%     |
| +2 or more  | 435/1296    | ~1/3             | ~33.56%     |
| +3 or more  | 310/1296    | ~1/4             | ~23.92%     |
| +4 or more  | 206/1296    | ~1/6             | ~15.90%     |
| +5 or more  | 126/1296    | ~1/10            | ~9.72%      |
| +6 or more  | 70/1296     | ~1/19            | ~5.40%      |
| +7 or more  | 35/1296     | ~1/37            | ~2.70%      |
| +8 or more  | 15/1296     | ~1/86            | ~1.16%      |
| +9 or more  | 5/1296      | ~1/259           | ~0.39%      |
| +10         | 1/1296      | ~1/1296          | ~0.08%      |

### Rules of Thumb

| Rule                      | Probability |
|---------------------------|-------------|
| Rolling 0 or higher       | 55% (5/9)   |
| Rolling +1 or higher      | 45% (4/9)   |
| Rolling +2 or higher      | ~1/3        |
| Rolling +3 or higher      | ~1/4        |
| Rolling +4 or higher      | ~1/6        |
| Rolling +5 or higher      | ~1/10       |
| Rolling +6 or higher      | ~1/20       |
| Rolling +8 or higher      | ~1/100      |
| Rolling +10               | ~1/1000     |

## NDR System

### Advantages and Disadvantages

| Modifier | Description                | Effect Range |
|----------|----------------------------|--------------|
| +10      | Immense advantage          | 52-100%      |
| +9       | Phenomenal advantage       | 43-99%       |
| +8       | Extraordinary advantage    | 33-94%       |
| +7       | Tremendous advantage       | 23-85%       |
| +6       | Formidable advantage       | 15-71%       |
| +5       | Exceptional advantage      | 10-52%       |
| +4       | Major advantage            | 5-43%        |
| +3       | Significant advantage      | 3-33%        |
| +2       | Moderate advantage         | 1-22%        |
| +1       | Minor advantage            | 0-11%        |
| 0        | No modifier                | 0%           |
| -1       | Minor disadvantage         | 0-11%        |
| -2       | Moderate disadvantage      | 1-22%        |
| -3       | Significant disadvantage   | 3-33%        |
| -4       | Major disadvantage         | 5-43%        |
| -5       | Exceptional disadvantage   | 10-52%       |
| -6       | Formidable disadvantage    | 15-71%       |
| -7       | Tremendous disadvantage    | 23-85%       |
| -8       | Extraordinary disadvantage | 33-94%       |
| -9       | Phenomenal disadvantage    | 43-99%       |
| -10      | Immense disadvantage       | 52-100%      |

### Difficulty Modifiers

| Modifier | Description           | Effect Range |
|----------|-----------------------|--------------|
| +10      | Effortless            | 52-100%      |
| +9       | Trivial               | 43-99%       |
| +8       | Elementary            | 33-94%       |
| +7       | Simple                | 23-85%       |
| +6       | Straightforward       | 15-71%       |
| +5       | Unchallenging         | 10-52%       |
| +4       | Manageable            | 5-43%        |
| +3       | Feasible              | 3-33%        |
| +2       | Reasonable            | 1-22%        |
| +1       | Fair                  | 0-11%        |
| 0        | Standard              | 0%           |
| -1       | Tricky                | 0-11%        |
| -2       | Tough                 | 1-22%        |
| -3       | Demanding             | 3-33%        |
| -4       | Challenging           | 5-43%        |
| -5       | Formidable            | 10-52%       |
| -6       | Strenuous             | 15-71%       |
| -7       | Arduous               | 23-85%       |
| -8       | Grueling              | 33-94%       |
| -9       | Herculean             | 43-99%       |
| -10      | Superhuman            | 52-100%      |

## Design Criteria

The NDR system was designed with the following criteria in mind:

1. **Larger numbers are better**: The system is designed so that higher results are more favorable, which is intuitive for most players.

2. **Small minimum probability**: The system allows for very unlikely events (0.08% chance for a ±10 result), adding excitement and unpredictability to the game.

3. **Large maximum probability**: The system also allows for very likely events, with a maximum probability of about 55.63% for results of 0 or higher.

4. **Continuous probabilities**: The probability distribution is smooth and continuous, allowing for fine-grained difficulty adjustments.

5. **Clear probabilities**: The probabilities, while not immediately obvious, follow a clear pattern that can be understood and approximated by players and game masters.

6. **Measurable degree of success**: The system provides a range of results (-10 to +10), allowing for varying degrees of success or failure.

7. **Difficulty doesn't affect special results**: The probability of extreme results (very high or very low rolls) remains constant regardless of situational modifiers.

8. **Allows for ties**: The system has a significant probability (11.27%) of resulting in a tie (0), which can add interesting dynamics to conflict resolution.

## Conclusion

The NDR system provides a flexible foundation for tabletop RPGs, offering a balance between simplicity and depth. It allows for a wide range of probabilities, clear degrees of success or failure, and interesting mechanical options for GMs and players alike.

This specification is a starting point for the NDR system. We encourage playtesting and feedback to refine and expand upon these core mechanics.
