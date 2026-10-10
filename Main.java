import math
import random
import matplotlib.pyplot as plt
import networkx as nx


# =========================================================
# Calculate Euclidean distance
# =========================================================
def calculate_distance(p1, p2):
    x1, y1 = p1
    x2, y2 = p2

    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)


# =========================================================
# Generate Random Graph
# =========================================================
def generate_graph():

    # Randomly choose 5 or 6 nodes
    n = random.randint(5, 6)

    G = nx.Graph()

    positions = {}
    node_values = {}

    # -----------------------------------------------------
    # Generate nodes
    # -----------------------------------------------------
    for i in range(n):

        # Random 2D coordinates
        x = random.uniform(0, 100)
        y = random.uniform(0, 100)

        positions[i] = (x, y)

        # Random value between 0 and 100
        value = random.randint(0, 100)

        node_values[i] = value

        G.add_node(i, value=value)

    # -----------------------------------------------------
    # Generate edges
    #
    # Edge exists ONLY when:
    # node_i <= 50 AND node_j <= 50
    # -----------------------------------------------------
    for i in range(n):

        for j in range(i + 1, n):

            if (
                node_values[i] <= 50
                and node_values[j] <= 50
            ):

                distance = calculate_distance(
                    positions[i],
                    positions[j]
                )

                G.add_edge(
                    i,
                    j,
                    weight=distance
                )

    return G, positions, node_values


# =========================================================
# Create Adjacency Matrix
# =========================================================
def create_adjacency_matrix(G):

    nodes = list(G.nodes)
    n = len(nodes)

    matrix = []

    for i in nodes:

        row = []

        for j in nodes:

            if G.has_edge(i, j):
                row.append(1)
            else:
                row.append(0)

        matrix.append(row)

    return matrix


# =========================================================
# Create Cost Matrix
# =========================================================
def create_cost_matrix(G):

    nodes = list(G.nodes)
    n = len(nodes)

    matrix = []

    for i in nodes:

        row = []

        for j in nodes:

            # Same node
            if i == j:

                row.append(0)

            # Edge exists
            elif G.has_edge(i, j):

                weight = G[i][j]["weight"]

                row.append(weight)

            # No edge
            else:

                row.append(float("inf"))

        matrix.append(row)

    return matrix


# =========================================================
# Print Matrix
# =========================================================
def print_matrix(matrix, title):

    print("\n")
    print("=" * 65)
    print(title)
    print("=" * 65)

    # Header
    print("      ", end="")

    for i in range(len(matrix)):
        print(f"{i:^10}", end="")

    print()

    print("      " + "-" * (10 * len(matrix)))

    # Rows
    for i, row in enumerate(matrix):

        print(f"{i:^5}|", end="")

        for value in row:

            if value == float("inf"):

                print(f"{'∞':^10}", end="")

            elif isinstance(value, float):

                print(f"{value:^10.2f}", end="")

            else:

                print(f"{value:^10}", end="")

        print()


# =========================================================
# Print Node Information
# =========================================================
def print_nodes(positions, node_values):

    print("\n")
    print("=" * 65)
    print("NODE INFORMATION")
    print("=" * 65)

    print(
        f"{'Node':<10}"
        f"{'Value':<10}"
        f"{'X':<12}"
        f"{'Y':<12}"
        f"{'Status'}"
    )

    print("-" * 65)

    for node in positions:

        x, y = positions[node]
        value = node_values[node]

        if value <= 50:
            status = "ACTIVE"
        else:
            status = "INACTIVE"

        print(
            f"{node:<10}"
            f"{value:<10}"
            f"{x:<12.2f}"
            f"{y:<12.2f}"
            f"{status}"
        )


# =========================================================
# Print Edge Information
# =========================================================
def print_edges(G):

    print("\n")
    print("=" * 65)
    print("EDGE INFORMATION")
    print("=" * 65)

    if len(G.edges) == 0:

        print("No edges exist.")

        return

    for u, v, data in G.edges(data=True):

        weight = data["weight"]

        print(
            f"Edge ({u}, {v})"
            f"    Cost = {weight:.2f}"
        )


# =========================================================
# Shortest Path
# =========================================================
def shortest_path(G, node_values):

    print("\n")
    print("=" * 65)
    print("SHORTEST PATH")
    print("=" * 65)

    try:

        source = int(
            input("Enter source node: ")
        )

        target = int(
            input("Enter target node: ")
        )

        # Check nodes
        if source not in G.nodes or target not in G.nodes:

            print("Invalid node.")

            return

        # Check inactive nodes
        if node_values[source] > 50:

            print(
                f"Node {source} has value "
                f"{node_values[source]} > 50."
            )

            print("It cannot be part of any path.")

            return

        if node_values[target] > 50:

            print(
                f"Node {target} has value "
                f"{node_values[target]} > 50."
            )

            print("It cannot be part of any path.")

            return

        # Check if path exists
        if not nx.has_path(
            G,
            source,
            target
        ):

            print("No path exists.")

            return

        # Shortest path
        path = nx.shortest_path(
            G,
            source=source,
            target=target,
            weight="weight"
        )

        distance = nx.shortest_path_length(
            G,
            source=source,
            target=target,
            weight="weight"
        )

        print()

        print(
            "Shortest Path:",
            " -> ".join(
                map(str, path)
            )
        )

        print(
            f"Total Cost: {distance:.2f}"
        )

    except ValueError:

        print(
            "Please enter valid node numbers."
        )


# =========================================================
# Draw Graph
# =========================================================
def draw_graph(
    G,
    positions,
    node_values
):

    plt.figure(
        figsize=(12, 10)
    )

    # -----------------------------------------------------
    # Active nodes
    # -----------------------------------------------------
    active_nodes = [
        node
        for node in G.nodes
        if node_values[node] <= 50
    ]

    # -----------------------------------------------------
    # Inactive nodes
    # -----------------------------------------------------
    inactive_nodes = [
        node
        for node in G.nodes
        if node_values[node] > 50
    ]

    # -----------------------------------------------------
    # Draw edges
    # -----------------------------------------------------
    nx.draw_networkx_edges(
        G,
        positions,
        width=2,
        alpha=0.7
    )

    # -----------------------------------------------------
    # Draw active nodes
    # -----------------------------------------------------
    nx.draw_networkx_nodes(
        G,
        positions,
        nodelist=active_nodes,
        node_size=1100,
        node_color="lightgreen",
        edgecolors="black",
        linewidths=2
    )

    # -----------------------------------------------------
    # Draw inactive nodes
    # -----------------------------------------------------
    nx.draw_networkx_nodes(
        G,
        positions,
        nodelist=inactive_nodes,
        node_size=1100,
        node_color="lightcoral",
        edgecolors="black",
        linewidths=2
    )

    # -----------------------------------------------------
    # Node labels
    # -----------------------------------------------------
    labels = {}

    for node in G.nodes:

        labels[node] = (
            f"{node}\n"
            f"Value: {node_values[node]}"
        )

    nx.draw_networkx_labels(
        G,
        positions,
        labels=labels,
        font_size=10,
        font_weight="bold"
    )

    # -----------------------------------------------------
    # Edge cost labels
    # -----------------------------------------------------
    edge_labels = {}

    for u, v, data in G.edges(data=True):

        edge_labels[(u, v)] = (
            f"{data['weight']:.1f}"
        )

    nx.draw_networkx_edge_labels(
        G,
        positions,
        edge_labels=edge_labels,
        font_size=9
    )

    # -----------------------------------------------------
    # Title
    # -----------------------------------------------------
    plt.title(
        "2D Weighted Graph",
        fontsize=18,
        fontweight="bold"
    )

    plt.axis("equal")
    plt.axis("off")

    plt.tight_layout()

    plt.show()


# =========================================================
# MAIN
# =========================================================
def main():

    print("=" * 65)
    print("2D RANDOM WEIGHTED GRAPH GENERATOR")
    print("=" * 65)

    print()
    print("Rules:")
    print("1. Number of nodes = 5 or 6")
    print("2. Node value = 0 to 100")
    print("3. Value <= 50  -> Edge allowed")
    print("4. Value > 50   -> No edge allowed")
    print("5. Edge cost = Euclidean distance")
    print()

    # -----------------------------------------------------
    # Generate graph
    # -----------------------------------------------------
    G, positions, node_values = generate_graph()

    # -----------------------------------------------------
    # Node information
    # -----------------------------------------------------
    print_nodes(
        positions,
        node_values
    )

    # -----------------------------------------------------
    # Edge information
    # -----------------------------------------------------
    print_edges(G)

    # -----------------------------------------------------
    # Adjacency Matrix
    # -----------------------------------------------------
    adjacency_matrix = create_adjacency_matrix(G)

    print_matrix(
        adjacency_matrix,
        "ADJACENCY MATRIX"
    )

    # -----------------------------------------------------
    # Cost Matrix
    # -----------------------------------------------------
    cost_matrix = create_cost_matrix(G)

    print_matrix(
        cost_matrix,
        "COST MATRIX"
    )

    # -----------------------------------------------------
    # Shortest path
    # -----------------------------------------------------
    choice = input(
        "\nCalculate shortest path? (y/n): "
    ).lower()

    if choice == "y":

        shortest_path(
            G,
            node_values
        )

    # -----------------------------------------------------
    # Draw graph
    # -----------------------------------------------------
    draw_graph(
        G,
        positions,
        node_values
    )


# =========================================================
# RUN PROGRAM
# =========================================================
if __name__ == "__main__":
    main()