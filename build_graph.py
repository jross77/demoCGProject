import sys
import json
import numpy as np

dmin = lambda l, d : d if len(l) == 0 else np.min(l)

def is_wheeler(G):
    """A graph is Wheeler if the nodes can be ordered such that
    1) 0 in-degree nodes come before others
    And for all e0 = (u0, v0, a0) and e1 = (u1, v1, a1)  with in =: u, out =: v, label =: a,
    2) a0 < a1 => v0 < v1 <=> not (a0 < a1 and v0 >= v1)
    3) (a0 = a1) and (u0 < u1) => v0 <= v1 <=> not (a0 = a1 and u0 < u1 and v0 > v1)
    
    O(E^2 + V)
    """
    vertices, edges = G
    e_in = [ e[1] for e in edges ]
    no_in = np.setdiff1d(vertices, e_in)
    # if nodes = [0..len(nodes)] is implied then can use
    # if np.any(np.diff(no_in) != 1): return False
    # For now do not assume that there are no nodes without any edges (incoming or outgoing). 
    if dmin(e_in, 0) <= dmin(no_in, 0): return False # some node with an in edge precedes a no-in-degree node

    for e0 in edges:
        for e1 in edges:
            if (e0[2] < e1[2] and e0[1] >= e1[1] or e0[2] == e1[2] and e0[0] < e1[0] and e0[1] > e1[1]):
                return False
    return True

def main():
    infile = open(sys.argv[1], 'r')
    # edges are a list of ordered triples (out_node, in_node, edge_label). However, json
    # format doesn't allow tuples, so really it is a 2D array.
    # must request for the nodes because the ordering is not always "complete"

    outfile = open(sys.argv[2], 'w')

    n, e = infile.readline(), infile.readline()
    while (n != '' and e != ''):
        nodes = json.loads(n.removesuffix('\n'))
        edges = json.loads(e.removesuffix('\n'))
        G = (nodes, edges)
        outfile.write(str(is_wheeler(G)) + '\n')
        n, e = infile.readline(), infile.readline()

    infile.close()
    outfile.close()

main()