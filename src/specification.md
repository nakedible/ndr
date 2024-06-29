# Natural Die Roll (NDR) Specification

## Introduction

The Natural Die Roll (NDR) system is a novel dice rolling mechanism designed for
tabletop role-playing games. This system aims to provide a balanced and flexible
foundation for resolving actions and conflicts within a game.

## Core Mechanic

The NDR dice roll is

<div style="font-size: 400%">
2d6 - 2d6
</div>

When rolling physical dice, this is rolled by rolling two six sided dice of one
color and substracting from the total two six sided dice of another color. The
recommended colors are black dice for the positive, and red dice for the
negative.

When using digital tools to roll dice, substracting dice might not be available
as a feature. In that case the alternative form of **4d6 - 14** should be used
instead. This produces the exact same distribution.

## Properties

- Range: -10 to +10
- Possible outcomes: 21
- Average (mean): 0
- Median (most likely result): 0
- Standard deviation: ≈ 3.41565

### Probability Distribution

| Result | Probability | Approximate |
|--------|-------------|-------------|
| -10    | 1/1296      | ~0.08%      |
| -9     | 4/1296      | ~0.31%      |
| -8     | 10/1296     | ~0.77%      |
| -7     | 20/1296     | ~1.54%      |
| -6     | 35/1296     | ~2.70%      |
| -5     | 56/1296     | ~4.32%      |
| -4     | 80/1296     | ~6.17%      |
| -3     | 104/1296    | ~8.02%      |
| -2     | 125/1296    | ~9.65%      |
| -1     | 140/1296    | ~10.80%     |
| 0      | 146/1296    | ~11.27%     |
| +1     | 140/1296    | ~10.80%     |
| +2     | 125/1296    | ~9.65%      |
| +3     | 104/1296    | ~8.02%      |
| +4     | 80/1296     | ~6.17%      |
| +5     | 56/1296     | ~4.32%      |
| +6     | 35/1296     | ~2.70%      |
| +7     | 20/1296     | ~1.54%      |
| +8     | 10/1296     | ~0.77%      |
| +9     | 4/1296      | ~0.31%      |
| +10    | 1/1296      | ~0.08%      |

### Cumulative Distribution

| Result      | Probability | Approximate |
|-------------|-------------|-------------|
| -10 or more | 1296/1296   | 100%        |
| -9 or more  | 1295/1296   | ~99.92%     |
| -8 or more  | 1291/1296   | ~99.61%     |
| -7 or more  | 1281/1296   | ~98.84%     |
| -6 or more  | 1261/1296   | ~97.30%     |
| -5 or more  | 1226/1296   | ~94.60%     |
| -4 or more  | 1170/1296   | ~90.28%     |
| -3 or more  | 1090/1296   | ~84.10%     |
| -2 or more  | 986/1296    | ~76.08%     |
| -1 or more  | 861/1296    | ~66.44%     |
| 0 or more   | 721/1296    | ~55.63%     |
| +1 or more  | 575/1296    | ~44.37%     |
| +2 or more  | 435/1296    | ~33.56%     |
| +3 or more  | 310/1296    | ~23.92%     |
| +4 or more  | 206/1296    | ~15.90%     |
| +5 or more  | 126/1296    | ~9.72%      |
| +6 or more  | 70/1296     | ~5.40%      |
| +7 or more  | 35/1296     | ~2.70%      |
| +8 or more  | 15/1296     | ~1.16%      |
| +9 or more  | 5/1296      | ~0.39%      |
| +10 or more | 1/1296      | ~0.08%      ||

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
