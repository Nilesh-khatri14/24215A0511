## Notification App Backend
# Stage 1

## Priority Determination

Notifications are prioritized using two factors:

1. Type Weight
2. Recency

Weights:

- Placement = 3
- Result = 2
- Event = 1

Priority Score:

Priority Score =
(Type Weight × Large Constant)
+ Timestamp

This guarantees:

Placement > Result > Event

while newer notifications are ranked higher within the same category.

## Top 10 Selection

All notifications are scored and sorted in descending order.

The first 10 notifications are selected as the Priority Inbox.

## Handling Continuous Notifications

To efficiently maintain the top 10 notifications as new notifications arrive, a Min Heap of size 10 can be used.

Algorithm:

1. Calculate priority score.
2. Insert into heap if heap size < 10.
3. If heap is full and the new score is larger than the minimum score, replace the minimum element.

Time Complexity:
O(log 10)

Space Complexity:
O(10)