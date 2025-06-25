OmniGenBench provides plug-and-play evaluation for over **30 genomic foundation models**, covering both **RNA** and **DNA** modalities. The following are highlights:

| Model          | Params | Pre-training Corpus                        | Highlights                                          |
|----------------|--------|--------------------------------------------|-----------------------------------------------------|
| **OmniGenome** | 186M   | 54B plant RNA+DNA tokens                   | Multi-modal, structure-aware encoder                |
| **Agro-NT-1B** | 985M   | 48 edible-plant genomes                    | Billion-scale DNA LM w/ NT-V2 k-mer vocab           |
| **RiNALMo**    | 651M   | 36M ncRNA sequences                        | Largest public RNA LM; FlashAttention-2             |
| **DNABERT-2**  | 117M   | 32B DNA tokens, 136 species (BPE)          | Byte-pair encoding; 2nd-gen DNA BERT                |
| **RNA-FM**     | 96M    | 23M ncRNA sequences                        | High performance on RNA structure tasks             |
| **RNA-MSM**    | 96M    | Multi-sequence alignments                  | MSA-based evolutionary RNA LM                       |
| **NT-V2**      | 96M    | 300B DNA tokens (850 species)              | Hybrid k-mer vocabulary                             |
| **HyenaDNA**   | 47M    | Human chromosomes                          | Long-context autoregressive model (1Mb)             |
| **SpliceBERT** | 19M    | 2M pre-mRNA sequences                      | Fine-grained splice-site recognition                |
| **Caduceus**   | 1.9M   | Human chromosomes                          | Ultra-compact DNA LM (RC-equivariant)               |
| **RNA-BERT**   | 0.5M   | 4,000+ ncRNA families                      | Small BERT with nucleotide masking                  |
| *...and more*  | —      | See Appendix E of the paper                | Includes PlantRNA-FM, UTR-LM, MP-RNA, CALM, etc.    |