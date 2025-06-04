## RNA Embedding Model
This tutorial will guide you through how to use the RNA embedding model using the `OmniGenomeModelForEmbedding` class. We will cover initializing the model, encoding RNA sequences, saving/loading embeddings, and computing similarities.

## Install Required Dependencies
Before we start, make sure you have the necessary libraries installed. You can install them using the following command:

```bash
!pip install OmniGenome torch transformers autocuda
```

## Setting Up the Embedding Model
First, let's initialize the OmniGenomeModelForEmbedding class with a pre-trained model.

```py
from omnigenome import OmniGenomeModelForEmbedding

# Initialize the model using a pre-trained model path (replace with RNA-specific model if available)
model_name = "bert-base-uncased"  # Example model, replace with your own model
embedding_model = OmniGenomeModelForEmbedding(model_name)
```
## Encoding RNA Sequences into Embeddings
We'll now encode a batch of RNA sequences into embeddings.

```py
# Example RNA sequences (replace these with your own RNA sequences)
rna_sequences = [
    "AUGGCUACG",
    "CGGAUACGGC",
    "UGGCCAAGUC",
    "AUGCUGCUAUGCUA"
]

# Encode the RNA sequences into embeddings
rna_embeddings = embedding_model.batch_encode(rna_sequences)

# Display the generated embeddings
print("RNA Embeddings:")
print(rna_embeddings)
```

## Saving and Loading Embeddings
You can save the generated embeddings to a file and load them later when needed.

```py
# Save embeddings to a file
embedding_model.save_embeddings(rna_embeddings, "rna_embeddings.pt")

# Load the embeddings from the file
loaded_embeddings = embedding_model.load_embeddings("rna_embeddings.pt")

# Display the loaded embeddings to verify
print("Loaded RNA Embeddings:")
print(loaded_embeddings)
```

## Computing Similarity Between RNA Sequences
Let's compute the similarity between two RNA sequence embeddings using cosine similarity.

```py
# Compute the similarity between the first two RNA sequence embeddings
similarity = embedding_model.compute_similarity(loaded_embeddings[0], loaded_embeddings[1])

# Display the similarity score
print(f"Similarity between the first two RNA sequences: {similarity:.4f}")
```
## Encoding a Single RNA Sequence
You can also encode a single RNA sequence into its embedding.
```py
# Example single RNA sequence
single_rna_sequence = "AUGGCUACG"

# Get the embedding for the single RNA sequence
single_rna_embedding = embedding_model.encode_single_sequence(single_rna_sequence)

# Display the embedding for the single RNA sequence
print("Single RNA Sequence Embedding:")
print(single_rna_embedding)
```




