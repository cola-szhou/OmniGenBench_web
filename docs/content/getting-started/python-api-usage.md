You can easily run the auto-benchmark in Python using the `omnigenome` package. Below is a step-by-step example:

```python
# Import the AutoBench class from the omnigenome package
from omnigenome import AutoBench

# Specify the model checkpoint from Hugging Face Model Hub
gfm = 'LongSafari/hyenadna-medium-160k-seqlen-hf'

# Choose a benchmark. Options: "RGB", "GB", "PGB", "GUE"
# The benchmark dataset will be automatically downloaded if not present.
benchmark = "RGB"

# Set the batch size for evaluation
bench_size = 8

# Define the random seeds for reproducibility
seeds = [0, 1, 2, 3, 4]

# Initialize the AutoBench object
# Set overwrite=True if you want to overwrite existing results
bench = AutoBench(
    benchmark=benchmark,
    model_name_or_path=gfm,
    overwrite=False
)

# Run the benchmark
# autocast: Set to True to enable mixed precision (faster on supported hardware)
# batch_size: Number of samples per batch
# seeds: List of random seeds for multiple runs
bench.run(
    autocast=False,
    batch_size=bench_size,
    seeds=seeds
)
```

!!! note
    - Make sure you have installed the `omnigenome` package and its dependencies.
    - The benchmark datasets will be downloaded automatically from `Hugging Face` if not already present.
    - For more advanced usage and troubleshooting, see the [AutoBench Tutorial Notebook](https://github.com/LongSafari/omnigenome/blob/main/examples/tutorials/AutoBench_Tutorial.ipynb).