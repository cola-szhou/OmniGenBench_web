# Command-Line Usage

OmniGenBench provides a command-line interface (CLI) for running tasks and benchmarks. You can run OmniGenBench in **one line**!

```bash
autobench --model_name_or_path "yangheng/OmniGenome-186M" --benchmark "RGB" --trainer accelerate
```

![title](../../assets/images/AutoBench.gif)

This command sets the model to [`yangheng/OmniGenome-186M`](https://huggingface.co/yangheng/OmniGenome-186M), the benchmark to [`RGB`](https://huggingface.co/spaces/yangheng/OmniGenomeLeaderboard), and use `accelerate` as the trainer. All acceptable parameters are listed below.

|    Parameter Name    | Description | Default Value |
|:--------------------:|-------------|:-------------:|
| `--model_name_or_path` | The name or path of the model to use. | `yangheng/OmniGenome-186M` |
| `--benchmark`          | The benchmark to use. | `RGB` |
| `--trainer`            | The trainer to use. | `accelerate` |

!!! tip
    OmniGenBench provides plug-and-play evaluation for over [**30 genomic foundation models**](supported-models.md), and supports [**5 curated benchmarks**](supported-benchmarks.md).